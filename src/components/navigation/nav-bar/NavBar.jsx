import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.titleImageContainer}>
        <img id={styles.logo} src="src/assets/Logo.png" alt="" />
        <h1 className={styles.h1DivNavBar}>HairRush</h1>
      </div>
      <div className={styles.div2NavBar}>
        <div className={styles.divDiv2NavBar}>
          <span className="material-symbols-outlined">favorite</span>
          <h3>Agendar</h3>
        </div>
        <div className={styles.divDiv2NavBar}>
          <span className="material-symbols-outlined">content_cut</span>
          <h3>Servicios</h3>
        </div>
        <div className={styles.divDiv2NavBar}>
          <span className="material-symbols-outlined">calendar_clock</span>
          <h3>Calendario de citas</h3>
        </div>
        <div className={styles.divDiv2NavBar}>
          <span className="material-symbols-outlined">3p</span>
          <h3>Información de contacto</h3>
        </div>
      </div>
    </nav>
  );
}