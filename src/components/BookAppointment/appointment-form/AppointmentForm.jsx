import styles from "./AppointmentForm.module.css";
import { useState } from "react";

export default function AppointmentForm() {
  const [pulseEnabled, setPulseEnabled] = useState(true);

  return (
    <>
      <form className={`${styles.formContainer} ${pulseEnabled ? styles.pulseEffect : ''}`}>
        <div className={styles.row}>
          <h1 className={styles.title}>Agenda tu cita</h1>
        </div>
        <div className={styles.row}>
          <input
            className={styles.smallInput}
            type="text"
            placeholder="Nombre Completo"
          />
          <input
            className={styles.smallInput}
            type="email"
            placeholder="Correo Electronico"
          />
        </div>
        <div className={styles.row}>
          <input type="date" className={styles.dateTimeInput} />
          <input type="time" className={styles.dateTimeInput} />
        </div>
        <div className={styles.row}>
          <select className={styles.selectService}>
            <option>Corte de cabello</option>
            <option>Rasurado Tradicional</option>
            <option>Mascarilla de carbon activado</option>
            <option>Diseño y mantenimiento de barba y bigote</option>
            <option>Aplicacion de productos capilares</option>
          </select>
        </div>
        <div className={styles.row}>
          <button type="button" className={styles.submitForm}>
            Reservar
          </button>
        </div>
      </form>
    </>
  );
}