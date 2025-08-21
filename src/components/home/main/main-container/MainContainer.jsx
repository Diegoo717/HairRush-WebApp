import { useState, useEffect, useRef } from 'react';
import styles from "./MainContainer.module.css";
import Spline from '@splinetool/react-spline';

export default function MainContainer() {
    const [showError, setShowError] = useState(false);
    const [errorInfo, setErrorInfo] = useState('');
    const [retryCount, setRetryCount] = useState(0);
    const [debugLog, setDebugLog] = useState(['🔄 Iniciando carga...']);
    const timeoutRef = useRef(null);

    const MAX_RETRIES = 3;
    const TIMEOUT_DURATION = 15000; 

    const addDebugLog = (message) => {
        setDebugLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`].slice(-10));
    };

    useEffect(() => {
        addDebugLog('🔍 Iniciando verificaciones...');

        const forceWebGLSettings = () => {
            addDebugLog('🔧 Verificando WebGL...');
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            
            const contexts = ['webgl2', 'webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
            let gl = null;
            
            for (const context of contexts) {
                try {
                    gl = canvas.getContext(context, {
                        alpha: false,
                        depth: true,
                        stencil: false,
                        antialias: false,
                        premultipliedAlpha: false,
                        preserveDrawingBuffer: false,
                        powerPreference: "high-performance",
                        failIfMajorPerformanceCaveat: false 
                    });
                    if (gl) {
                        addDebugLog(`✅ WebGL encontrado: ${context}`);
                        break;
                    }
                } catch (e) {
                    addDebugLog(`❌ ${context} falló`);
                }
            }
            
            if (!gl) {
                addDebugLog('❌ WebGL completamente no disponible');
                setErrorInfo('WebGL no disponible en este dispositivo');
                setShowError(true);
                return false;
            }

            addDebugLog('✅ WebGL configurado correctamente');
            return true;
        };

        if (!forceWebGLSettings()) return;

        addDebugLog(`⏱️ Iniciando timeout de ${TIMEOUT_DURATION/1000}s...`);
        
        timeoutRef.current = setTimeout(() => {
            if (!showError) {
                addDebugLog('⏰ Timeout alcanzado');
                handleRetry('Timeout después de múltiples intentos');
            }
        }, TIMEOUT_DURATION);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [retryCount]);

    const handleSplineLoad = () => {
        addDebugLog('🎉 SPLINE CARGADO EXITOSAMENTE');
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleSplineError = (error) => {
        addDebugLog(`💥 Error de Spline: ${error?.message || 'desconocido'}`);
        const errorMsg = error?.message || 'Error desconocido al cargar el modelo 3D';
        handleRetry(errorMsg);
    };

    const handleRetry = (errorMsg) => {
        addDebugLog(`🔄 Reintento ${retryCount + 1}/${MAX_RETRIES}: ${errorMsg}`);
        if (retryCount < MAX_RETRIES) {
            setRetryCount(prev => prev + 1);
            setTimeout(() => {
                addDebugLog('♻️ Recargando página...');
                window.location.reload();
            }, 2000);
        } else {
            addDebugLog('🚫 TODOS LOS REINTENTOS FALLARON');
            setErrorInfo(errorMsg);
            setShowError(true);
        }
    };

    const handleManualRetry = () => {
        setRetryCount(0);
        setShowError(false);
        setErrorInfo('');
        window.location.reload();
    };
    return (
        <main className={styles.MainContainer}>
            <div style={{
                position: 'fixed', 
                top: '10px', 
                left: '10px', 
                right: '10px',
                maxHeight: '200px',
                overflow: 'auto',
                color: 'white', 
                background: 'rgba(0,0,0,0.9)', 
                padding: '10px',
                zIndex: 9999,
                fontSize: '11px',
                borderRadius: '5px',
                fontFamily: 'monospace'
            }}>
                <strong>🐛 DEBUG LOG:</strong>
                {debugLog.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
                <div style={{marginTop: '10px', borderTop: '1px solid #333', paddingTop: '5px'}}>
                    <strong>Estado actual:</strong><br/>
                    showError: {showError ? 'SÍ' : 'NO'}<br/>
                    retryCount: {retryCount}<br/>
                    WebGL: {window.WebGLRenderingContext ? '✅' : '❌'}
                </div>
            </div>

            {!showError && (
                <div className={styles.splineContainer}>
                    <Spline 
                        scene="https://prod.spline.design/ks6uYhieEtm7wAQM/scene.splinecode"
                        onLoad={handleSplineLoad}
                        onError={handleSplineError}
                        style={{
                            width: '100%',
                            height: '100%',
                            imageRendering: 'auto',
                            willChange: 'transform', 
                        }}
                        renderOnDemand={false}
                        camera-controls="true"
                    />
                </div>
            )}

            {showError && (
                <div className={styles.errorContainer}>
                    <div className={styles.errorContent}>
                        <h2>⚠️ Problema técnico</h2>
                        <p><strong>Motivo:</strong> {errorInfo}</p>
                        
                        <details className={styles.diagnostics}>
                            <summary>🔍 Información técnica</summary>
                            <div className={styles.diagnosticInfo}>
                                <p><strong>Navegador:</strong> {navigator.userAgent.split(' ').pop()}</p>
                                <p><strong>WebGL:</strong> {window.WebGLRenderingContext ? '✅' : '❌'}</p>
                                <p><strong>WebGL2:</strong> {window.WebGL2RenderingContext ? '✅' : '❌'}</p>
                                <p><strong>Memoria:</strong> {navigator.deviceMemory || 'No disponible'}GB</p>
                                <p><strong>Conexión:</strong> {navigator.connection?.effectiveType || 'No disponible'}</p>
                                <p><strong>Intentos realizados:</strong> {retryCount}/{MAX_RETRIES}</p>
                            </div>
                        </details>

                        <div className={styles.errorActions}>
                            <button 
                                className={styles.retryButton}
                                onClick={handleManualRetry}
                            >
                                🔄 Reintentar
                            </button>
                        </div>

                        <div className={styles.suggestions}>
                            <h4>💡 Posibles soluciones:</h4>
                            <ul>
                                <li>Actualiza tu navegador</li>
                                <li>Habilita la aceleración por hardware</li>
                                <li>Verifica tu conexión a internet</li>
                                <li>Cierra otras pestañas para liberar memoria</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            
            <div className={styles.div}></div>
        </main>
    );
}