import { useState, useEffect, useRef } from "react";
import styles from "./MainContainer.module.css";
import Spline from "@splinetool/react-spline";

export default function MainContainer() {
  const [showError, setShowError] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const timeoutRef = useRef(null);

  const MAX_RETRIES = 3;
  const TIMEOUT_DURATION = 15000;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }

    const forceWebGLSettings = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;

      const contexts = [
        "webgl2",
        "webgl",
        "experimental-webgl",
        "webkit-3d",
        "moz-webgl",
      ];
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
            failIfMajorPerformanceCaveat: false,
          });
          if (gl) {
            break;
          }
        } catch (e) {}
      }

      if (!gl) {
        setErrorInfo("WebGL no disponible en este dispositivo");
        setShowError(true);
        return false;
      }

      return true;
    };

    if (!forceWebGLSettings()) return;

    timeoutRef.current = setTimeout(() => {
      if (!showError) {
        handleRetry("Timeout después de múltiples intentos");
      }
    }, TIMEOUT_DURATION);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [retryCount]); 

  const handleSplineLoad = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleSplineError = (error) => {
    const errorMsg =
      error?.message || "Error desconocido al cargar el modelo 3D";
    handleRetry(errorMsg);
  };

  const handleRetry = (errorMsg) => {
    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setErrorInfo(errorMsg);
      setShowError(true);
    }
  };

  const handleManualRetry = () => {
    setRetryCount(0);
    setShowError(false);
    setErrorInfo("");
    window.location.reload();
  };

  return (
    <main className={styles.MainContainer}>
      {!showError && (
        <div className={styles.splineContainer}>
          <Spline
            scene="https://prod.spline.design/ks6uYhieEtm7wAQM/scene.splinecode"
            onLoad={handleSplineLoad}
            onError={handleSplineError}
            style={{
              width: "100%",
              height: "100%",
              opacity: 1,
              zIndex: 10,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}

      {showError && (
        <div className={styles.errorContainer}>
          <div className={styles.errorContent}>
            <h2>⚠️ Problema técnico</h2>
            <p>
              <strong>Motivo:</strong> {errorInfo}
            </p>

            <details className={styles.diagnostics}>
              <summary>🔍 Información técnica</summary>
              <div className={styles.diagnosticInfo}>
                <p>
                  <strong>Navegador:</strong>{" "}
                  {navigator.userAgent.split(" ").pop()}
                </p>
                <p>
                  <strong>WebGL:</strong>{" "}
                  {window.WebGLRenderingContext ? "✅" : "❌"}
                </p>
                <p>
                  <strong>WebGL2:</strong>{" "}
                  {window.WebGL2RenderingContext ? "✅" : "❌"}
                </p>
                <p>
                  <strong>Memoria:</strong>{" "}
                  {navigator.deviceMemory || "No disponible"}GB
                </p>
                <p>
                  <strong>Conexión:</strong>{" "}
                  {navigator.connection?.effectiveType || "No disponible"}
                </p>
                <p>
                  <strong>Intentos realizados:</strong> {retryCount}/
                  {MAX_RETRIES}
                </p>
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