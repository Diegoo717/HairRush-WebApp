import styles from "./MainContainer.module.css";
import ContactDetails from "../contactDetails/ContactDetails";
import {useEffect} from "react"

export default function MainContainer() {

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
        <header>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>
              Conecta con Nosotros
            </h1>
            <p className={styles.subtitle}>
              Tu próximo look excepcional está a un click de distancia. 
              <br />
              Contáctanos para proporcionarte toda la información que necesites.
            </p>
          </div>
        </header>
        <section className={styles.mapSection}>
          <div className={styles.container}>
            <div className={styles.titleWrapper}>
              <h3 className={styles.mapTitle}>Nuestra Localización</h3>
            </div>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477.1508461569806!2d-101.15026159419662!3d20.13974163848755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cfab60ca5e1d3%3A0x60ae1a745fc6bf18!2sITSUR%20Instituto%20Tecnol%C3%B3gico%20Superior%20del%20Sur%20de%20Guanajuato!5e0!3m2!1ses!2smx!4v1754677218830!5m2!1ses!2smx"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la barbería"
            ></iframe>
          </div>
        </section>
        <section className={styles.contactInfoSection}>
          <div className={styles.container}>
            <div className={styles.titleWrapper}>
              <h3 className={styles.infoTitle}>Informacion de contacto</h3>
            </div>
            <ContactDetails
              title={"Dirección"}
              content={
                "Educación Superior 2000, Benito Juárez, 38980 Uriangato, Gto."
              }
            ></ContactDetails>
            <ContactDetails
              title={"Horarios de atención"}
              content={
                "Lunes a Viernes: 8:00 AM - 2:00 PM y 4:00 PM - 8:00 PM\nSábados y Domingos: Cerrado"
              }
            ></ContactDetails>
            <ContactDetails
              title={"Telefono"}
              content={"+52 445 105 91 92"}
            ></ContactDetails>
            <ContactDetails
              title={"Correo"}
              content={"hairrushsoporte@gmail.com"}
            ></ContactDetails>
          </div>
        </section>
        <section className={styles.aboutUsSection}>
          <div className={styles.container}>
            <div className={styles.titleWrapper}>
              <h3 className={styles.aboutUsTitle}>Sobre Nosotros</h3>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9H21ZM10.5 7.5L12 6L13.5 7.5H10.5ZM21 10H9V12H21V10ZM21 13H9V15H21V13ZM21 16H9V18H21V16ZM21 19H9V21H21V19Z" />
                  </svg>
                </div>
                <div className={styles.aboutText}>
                  <h4 className={styles.aboutItemTitle}>Nuestra Misión</h4>
                  <p className={styles.aboutItemDescription}>
                    Brindar servicios capilares premium con técnicas modernas y
                    trato personalizado, creando una experiencia única que
                    realce la confianza y estilo de cada cliente.
                  </p>
                </div>
              </div>

              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                  </svg>
                </div>
                <div className={styles.aboutText}>
                  <h4 className={styles.aboutItemTitle}>Nuestra Visión</h4>
                  <p className={styles.aboutItemDescription}>
                    Liderar el cuidado capilar en tu región fusionando
                    innovación y tradición para experiencias únicas, siendo
                    reconocidos como el destino preferido para quienes buscan
                    excelencia.
                  </p>
                </div>
              </div>

              <div className={styles.aboutItem}>
                <div className={styles.iconContainer}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </div>
                <div className={styles.aboutText}>
                  <h4 className={styles.aboutItemTitle}>Nuestros Valores</h4>
                  <p className={styles.aboutItemDescription}>
                    Innovación constante, artesanía en cada detalle, confianza
                    del cliente como prioridad, sustentabilidad en nuestros
                    procesos e inclusión para todas las personas que nos
                    visitan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
