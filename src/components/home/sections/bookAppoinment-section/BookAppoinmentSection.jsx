import { useEffect, useRef, useState } from "react";
import styles from "./BookAppointmentSection.module.css";
import { NavLink } from "react-router-dom";

export default function BookAppointmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 1,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const renderAnimatedLook = () => {
    const letters = ["l", "o", "o", "k"];
    return letters.map((letter, index) => (
      <span
        key={index}
        className={`${styles.lookLetter} ${isVisible ? styles.animate : ""}`}
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <>
      <section ref={sectionRef} className={styles.bookAppointmentSection}>
        <h1 className={styles.title}>
          ¿Listo para un cambio de {renderAnimatedLook()}?
        </h1>
        <NavLink to="/book-appointment">
          <div className={styles.bookAppointmentButton}>
            <h3>Agenda una cita</h3>
          </div>
        </NavLink>
      </section>
    </>
  );
}
