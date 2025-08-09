import styles from "./MainContainer.module.css";
import OurServicesCard from "../cards/OurServicesCard/OurServicesCard";

export default function MainContainer() {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Transforma tu estilo con los mejores</h1>
          <p className={styles.subtitle}>
            Servicios profesionales de barbería con técnicas tradicionales y
            productos premium.
          </p>
        </div>
      </header>
      <section className={styles.ourServicesSection}>
        <OurServicesCard
          title="Corte de cabello"
          description="Nuestros barberos expertos brindan cortes de cabello de precisión
            adaptados a tu estilo y preferencias personales. Desde cortes
            clásicos atemporales hasta las tendencias más modernas y
            vanguardistas, nos aseguramos de que salgas luciendo lo mejor
            posible. Cada corte se personaliza según la forma de tu rostro, tipo
            de cabello y estilo de vida, garantizando un resultado que te haga
            sentir seguro y bien arreglado."
          price="$100"
          age="Edades 12-65"
          imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBOh7NUAWGSuXjC3uyqN97BYxbh6XC5afXLvsDiXje-lLa__Pq6ls5v5YAJtHb_Aa0GfIXW82bb7FGPm2EQX4jpCSHKMOVcp8k6KDE8-osuiRoox4-k-X36VXcW2bt6hJ1jdsJB5KuZVeCsP6RPui6715UsRIh4njD1grpWbT3NFHtd0GEJPXy8x4VP3PWsfS35eKOc3P5wV8_kKcGE_TIgKBxKT6I0ShKwQROXzm4f25sEtTnwFQWa5KMtV6nhnPEjKjzyzqvQ1AOQ"
        />
      </section>
      <section className={styles.ourServicesSection}>
        <OurServicesCard
          title="Afeitado tradicional"
          description="Experimenta el lujo de un afeitado tradicional con toalla caliente, 
          una experiencia relajante que combina tradición y sofisticación. Nuestros barberos hábiles utilizan 
          técnicas ancestrales transmitidas de generación en generación, junto con productos premium de alta calidad para 
          lograr un afeitado suave, apurado y confortable. El proceso incluye preparación de la piel, aplicación de aceites esenciales y el uso de navajas profesionales para un acabado impecable."
          price="$80"
          age="Edades: 18-65 años"
          imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBPVRoUuux28jZgl5OWIZ1tNP0KgR_Qkr4xZ-v2ughlKwPBPeo8zcBGEFjZ1CiVTHudskT8LtY5SBEhAupzJ7iOBAP1XF7wgNwoO8YXJSPFANZoQ-UrD9l7zfElouElYiFGH4riGtU6jtEb-ogo82amRPaI6ZxCZh4dy1O51sqQi8H0jofx33u_McT60hT0ciZ1JE8HEqSJyU4uzTlEz_epl8t-AfDX0CgP3gimZcpD8RjjWu1dmlmuDmmkkJeaB9Tj9pOKwDhRV1dC"
        />
      </section>
      <section className={styles.ourServicesSection}>
        <OurServicesCard
          title="Mascarilla de carbón activado"
          description="Limpia profundamente y rejuvenece tu piel con nuestro exclusivo tratamiento de mascarilla de carbón activado, 
          ideal para todo tipo de piel. Este servicio especializado ayuda a eliminar las impurezas acumuladas, exceso de grasa y toxinas de los poros, dejando tu piel notablemente más fresca, suave y revitalizada. La mascarilla de carbón activado es perfecta para combatir puntos negros, 
          reducir el brillo excesivo y mejorar la textura general de la piel del rostro."
          price="$50"
          age="Edades: 16-65 años"
          imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCgSSkfBv8BZMUqG6NydOSKqDY27iYJjMKZ5VcK8UQ96eeUvpp_WDuq8ekJ7jrf4WVVnlL10mx2HENo9AKrBlh6Gd4j3w2ip9GxLHOt3J73_hhyr_aDost-p9EqGI_ThFuXca4h2NTJeRL_BT23NHrQVDTWiAPP4MslRNZNHYiw9Wt7LeZxWYUkCYVvqfpD5Es4mlh_AGizrz29skDMngLw7Iq9dSahe93i2PS3_-ECdimVFi_29kZsOsWkPTvLoCcZOW2cunJueOyR"
        />
      </section>
      <section className={styles.ourServicesSection}>
        <OurServicesCard
          title={
            <>
              Diseño y mantenimiento
              <br />
              de barba y bigote
            </>
          }
          description="Dale forma profesional y mantén impecablemente tu barba y bigote con nuestros servicios de cuidado y 
          diseño experto. Nuestros barberos especializados te ayudarán a lograr el estilo perfecto que complemente y realce 
          tus características faciales únicas. Ofrecemos desde perfilado básico hasta diseños complejos y creativos, 
          incluyendo el mantenimiento regular que mantendrá tu vello facial siempre bien cuidado, simétrico y con la 
          longitud ideal para tu estilo personal."
          price="$80"
          age="Edades 18-65 años"
          imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDlvTTo7JUHSeVbFLDT5mvMbEf6V4URAuRDDzHgc8EsYV_-wlfB6tVHJeOXGPMANQOgNsm5q5_kEYIOakVFL_OhuCzttI27KNz-Q88cj-ElRUa_r4C8t-sH3tOOqdTSnOTQg7TdvSENqBdnpKgD0LMvHrKF92dArcqnNg4Xd3TKkc1hcJ7ORBW8_bN5BqjjlHRWjxpL8iKzx-sCj-4ne0_Dh8S5XYRnNmmFtUeRIkXsQCXrFTrveaQVp1aMK9c7LAlN16hCxDsHHWin"
        />
      </section>
      <section className={styles.ourServicesSection}>
        <OurServicesCard
          title="Aplicación de productos capilares"
          description="Mejora y perfecciona tu peinado con nuestra aplicación profesional de productos 
          capilares de primera calidad, diseñada para todo tipo de cabello. Utilizamos una selección cuidadosa 
          de productos premium y técnicas especializadas para lograr exactamente el look que deseas, desde estilos 
          elegantes y pulidos hasta acabados más texturizados, voluminosos y naturales. Nuestros estilistas te asesorarán 
          sobre los mejores productos para tu tipo de cabello 
          y te enseñarán cómo mantener el estilo en casa."
          price="$100-300"
          age="Edades 12-65"
          imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBGdlQJid4lHpttbrKJmRz1cM_3Wr8dcifbye5L8oce2U-8EjvHm8c7trCuznKqncFANG_teq4NFuJt1LOT2lsvEqf7Vftw9JFroIOHZr4iqeIdIKjrdBczjzlPa2ZM3mgv9dTCVwd5JiTzup19rZ_Vcn1PRp3h0VK-_YFCoKvExF4S7jVSpmP6oQ6en-cNbegLpbCU5s5pHo3etJ4DA6yq-_3jyTaJfzR0lGSQAc0krO4ScDJXJY6mRWglCIli_0pHlbYNCJLm6-iq"
        />
      </section>
    </>
  );
}
