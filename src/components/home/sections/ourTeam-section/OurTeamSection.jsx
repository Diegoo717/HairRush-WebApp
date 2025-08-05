import styles from "./OurTeamSection.module.css"
import ImageCard from "../../cards/image-card/ImageCard"

export default function OurTeamSection() {
  return (
    <>
      <section className={styles.ourTeamSection}>
        <h1 className={styles.title}>Nuestro Equipo</h1>
        <div className={styles.cardsContainer}>
            <ImageCard title={"Ethan"} imageUrl={"https://lh3.googleusercontent.com/aida-public/AB6AXuC2vq0DYAMs-Cmx0AAw9hPEH2SIEzajbm-RWSFtR0jSAocYLkeQzZrQsrFs7Z4PpxyXsoL-lSM9-f20O3M8bId3vK2bKnt1tC7y32Z9XHOn5xTcKcOQvJFV-DAsoddVLib4SDb8BRvJLj8J3dp0TwTLH1riIWRfDAldz4kN0J8qieeCu4kVo62IYLhjQh5nRCZaAHZDGr3QlNxA5AURbfkIkZkIWAz4lC_05h-_YX_6Ep_g7oF0Nyf6owmrf8mNIdi9US15qQtRbwdW"
            } description={"Especialista en cortes clásicos y afeitados tradicionales."}/>
            <ImageCard title={"Sofía"} imageUrl={"https://lh3.googleusercontent.com/aida-public/AB6AXuA5bZQPQahVmPqOEgqWyLyzdqg8TLo3FIWnyn5FUHaPXO6H8ikDGdPuO0nmcBdzsptOY_EBg0IcT_oAz-MtY_XzfeeBinaNWSaFEhE1VDhbZp4wcApPzMdcKnq28BbHkA-8qNDooGYIw8CcEp7LGLSyKEbyFujkzLjYePJMgVtEfzG9DdhviEbNNMd-WdvgnFqyPQllfosbQtjLSQL391FfRMMWDuRDLw_pCOxOYN2CkZQPIKyYtqwkKLCMHElfe4fk5CRIQL_OlcQw"
            } description={"Experta en coloración y peinados para ocasiones especiales."}/>
            <ImageCard title={"Pablo"} imageUrl={"https://lh3.googleusercontent.com/aida-public/AB6AXuBieJUzTjO7LIcvhzgQwxUj_PGImQf7P0Aeb0x8RBhkZvUGO6YFccSCa78lIIii_HNW7RXzZ_LtH8HuWJCTpVEsVfHkDkJI-SrmdLzoUJ14Jn0bRmEywb_E2hY7PBsii7v-ULMV0-sMBIntfqASwypOVl_zUJOuG6DhCHxpVLnO8d0wJMv_tnKEmsFH6b5sjJcfXnxoUxrcVDDsShMhGfp0RRRPpMJv6ZN4aTOFOH8uOi2Hc3F6fZdD0bOKTZPqwrauIGjOUHagX9D8"
            } description={"Conocido por sus técnicas de cortes modernos y vanguardistas."}/>
        </div>
      </section>
    </>
  );
}
