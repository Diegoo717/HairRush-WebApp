import styles from "./BookAppointmentSection.module.css";

export default function BookAppointmentSection() {
  return (
    <>
      <section className={styles.bookAppointmentSection}>
        <h1 className={styles.title}>¿Listo para un cambio de look?</h1>
        <div className={styles.bookAppointmentButton}>
          <h3>Agenda una cita</h3>
        </div>
      </section>
    </>
  );
}
