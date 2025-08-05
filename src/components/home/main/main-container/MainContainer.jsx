import styles from "./MainContainer.module.css"
import Spline from '@splinetool/react-spline';

export default function MainContainer(){
    return (
        <>
        <main className={styles.MainContainer}>
            <Spline scene="https://prod.spline.design/ks6uYhieEtm7wAQM/scene.splinecode" />
            <div className={styles.div}></div>
        </main>
        </>
    )
}