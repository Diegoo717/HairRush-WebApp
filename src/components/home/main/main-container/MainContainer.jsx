import styles from "./MainContainer.module.css"
import Spline from '@splinetool/react-spline';

export default function MainContainer(){
    return (
        <>
        <main className={styles.MainContainer}>
            <div className={styles.splineContainer}>
                <Spline scene="https://prod.spline.design/ks6uYhieEtm7wAQM/scene.splinecode" />
            </div>
            <div className={styles.div}></div>
        </main>
        </>
    )
}