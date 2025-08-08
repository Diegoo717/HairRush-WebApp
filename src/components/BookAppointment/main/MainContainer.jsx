import styles from "./MainContainer.module.css"
import AppointmentForm from "../appointment-form/AppointmentForm"

export default function MainContainer(){
    return (
        <>
        <main className={styles.MainContainer}>
            <AppointmentForm />
        </main>
        </>
    )
}