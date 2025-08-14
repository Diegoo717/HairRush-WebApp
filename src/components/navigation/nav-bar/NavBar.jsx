import { useState } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ animated = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navBar} ${animated ? styles.animated : ''}`}>
      <div className={`${styles.titleImageContainer} ${animated ? styles.animatedElement : ''}`}>
        <img 
          id={styles.logo} 
          src="src/assets/Logo.png" 
          alt="" 
          className={animated ? styles.animatedElement : ''}
        />
        <NavLink to="/">
          <h1 className={`${styles.h1DivNavBar} ${animated ? styles.animatedElement : ''}`}>
            HairRush
          </h1>
        </NavLink>
      </div>

      <button
        className={`${styles.hamburgerButton} ${animated ? styles.animatedElement : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`material-symbols-outlined ${animated ? styles.animatedElement : ''}`}>
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>

      <div 
        className={`${styles.div2NavBar} ${isMenuOpen ? styles.menuOpen : ""} ${animated ? styles.animatedElement : ''}`}
      >
        <NavLink to="/book-appointment">
        <div
          className={`${styles.divDiv2NavBar} ${animated ? styles.animatedElement : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={`material-symbols-outlined ${animated ? styles.animatedElement : ''}`}>
            favorite
          </span>
            <h3>Agendar</h3>
          
        </div>
        </NavLink>
        <NavLink to="/services">
        <div
          className={`${styles.divDiv2NavBar} ${animated ? styles.animatedElement : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={`material-symbols-outlined ${animated ? styles.animatedElement : ''}`}>
            content_cut
          </span>
            <h3>Servicios</h3>
        </div>
        </NavLink>
        <NavLink to="/calendar">
        <div
          className={`${styles.divDiv2NavBar} ${animated ? styles.animatedElement : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={`material-symbols-outlined ${animated ? styles.animatedElement : ''}`}>
            calendar_clock
          </span>
            <h3>Calendario de citas</h3>
        </div>
        </NavLink>
        <NavLink to="/contact-information">
        <div
          className={`${styles.divDiv2NavBar} ${animated ? styles.animatedElement : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className={`material-symbols-outlined ${animated ? styles.animatedElement : ''}`}>
            3p
          </span>
            <h3>Información de contacto</h3>
        </div>
        </NavLink>
      </div>
    </nav>
  );
}