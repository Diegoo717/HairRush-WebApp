import styles from "./SpecialPackagesSection.module.css"
import SpecialPackageCard from "../../cards/specialPackage-card/SpecialPackageCard"

export default function SepecialPackagesSection() {
  const suitcaseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z"></path>
    </svg>
  );

  const heartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42A60.07,60.07,0,0,0,18,102c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42Zm-5.49,136.36A322.63,322.63,0,0,1,128,212.6a322.63,322.63,0,0,1-44.51-34.24C52.27,149.17,30,122.25,30,102A48.05,48.05,0,0,1,78,54c18.17,0,34.08,10.14,41.72,26.61a6,6,0,0,0,10.56,0C137.92,64.14,153.83,54,172,54a48.05,48.05,0,0,1,48,48C220,122.25,197.73,149.17,172.51,178.36Z"></path>
    </svg>
  );

  const tagIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.64,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.64A15.94,15.94,0,0,0,201,200.87l45.63-68.43A8,8,0,0,0,246.66,123.56ZM187.64,192H40V64H187.64l42.67,64ZM88,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm0,32a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Z"></path>
    </svg>
  );

  return (
    <>
      <section className={styles.specialPackagesSection}>
        <h1 className={styles.title}>Paquetes Especiales</h1>
        <div className={styles.cardsContainer}>
          <SpecialPackageCard 
            title={"Paquete de Arreglo Nupcial"} 
            content={"Prepárate para tu gran día con nuestro paquete de cuidado completo, asegurando que luzcas perfecto."} 
            icon={suitcaseIcon}
          />
          <SpecialPackageCard 
            title={"Promoción Padre e Hijo"} 
            content={"Disfruta de tiempo de calidad con tu hijo mientras ambos obtienen un corte de pelo fresco y con estilo."} 
            icon={heartIcon}
          />
          <SpecialPackageCard 
            title={"Promociones de Temporada"} 
            content={"Aprovecha nuestras ofertas por tiempo limitado y descuentos en servicios seleccionados."} 
            icon={tagIcon}
          />
        </div>
      </section>
    </>
  );
}