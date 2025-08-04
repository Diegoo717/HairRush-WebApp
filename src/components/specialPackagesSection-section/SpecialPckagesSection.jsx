import styles from "./SpecialPackagesSection.module.css"
import SpecialPackageCard from "../specialPackage-card/SpecialPackageCard"

export default function SepecialPackagesSection() {
  return (
    <>
      <section className={styles.specialPackagesSection}>
        <h1 className={styles.title}>Paquetes Especiales</h1>
        <div className={styles.cardsContainer}>
          <SpecialPackageCard title={"Paquete de Arreglo Nupcial"} content={"Prepárate para tu gran día con nuestro paquete de cuidado completo, asegurando que luzcas perfecto."}></SpecialPackageCard>
          <SpecialPackageCard title={"Promoción Padre e Hijo"} content={"Disfruta de tiempo de calidad con tu hijo mientras ambos obtienen un corte de pelo fresco y con estilo."}></SpecialPackageCard>
          <SpecialPackageCard title={"Promociones de Temporada"} content={"Aprovecha nuestras ofertas por tiempo limitado y descuentos en servicios seleccionados."}></SpecialPackageCard>
        </div>
      </section>
    </>
  );
}
