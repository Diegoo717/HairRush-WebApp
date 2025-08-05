import styles from "./PopularStylesSection.module.css"
import ImageCard from "../../cards/image-card/ImageCard"

export default function OwnSection() {
  return (
    <>
      <section className={styles.OwnSection}>
        <h1 className={styles.title}>Estilos Populares</h1>
        <div className={styles.cardsContainer}>
            <ImageCard title={"Fade"} imageUrl={"https://lh3.googleusercontent.com/aida-public/AB6AXuAb6mFWe5gCbEWrnIwXtgo9jylrHh9Mg9TYzt6MCYCGNyrfkMGGaoYJPwHy3HlkWD2hijwlQhTSwzfeh6kDX-rpTKP2fUtL0AuPQ3nDk5wT__ZX0kzK_6gFbFCqkf6ReJ2gqluiFOTX1Oq4EwFd-uMzGoTceS_YkS9uS22pBxi1hbi8aaCsXxwgTyl7HJPNsxR5s6oyVwIYAn0CBXwzj0VjgKgQOkwZ5IYkmQ_y7nJ1khVjtXBhokfpnYb_AqQnx8YDTzOmwUt5SnCU"
            } description={"Un corte moderno y versátil que se adapta a cualquier estilo."}/>
            <ImageCard title={"Pompadour"} imageUrl={"https://lh3.googleusercontent.com/aida-public/AB6AXuC1wA5CqUSZpGPiD8pfCRYucUWioMeOEmNRSU9AHYFgGLc1Eh-PUpfkndcXuZ9J976H1SQ5OHYR9YWeK72rvrc_wFkVEd2RJ_N8JVs9p3yZ3v1eLMinnE_4X9Ru9fvxTmwXsvQEqSkApeTsNjjdyauw94rHBuHWftLLYtuXNLhBfiiec17xfxve8fhcVGcP83J9fE4_1vlVe5eYzyxodJoGQg9sPyXdAnYwmJjNtKtbpYuRWMQiNKFJq9RZW8iCiu1M2V4NRHTVJ06D"
            } description={"Un clásico atemporal que nunca pasa de moda."}/>
            <ImageCard title={"Textured Crop"} imageUrl={"https://lh3.googleusercontent.com/aida-public/AB6AXuBjqciQtEtxFPK5rFDch-qGIG0NgdEOEqWliuZsNYHHJ7W4fWhMcsJy8vU_DitJ9d7QTM92OztQkMrJtLXOoza9TrbGCF6cx_f2vsmjYxWGnDKMYLsnzrizh2LevxJ_gAqxXHPpafQmjbAhxbYmZIu1g8vu-lucFHg2FkKTSpfouJCXdLW873zKwC3IKqojo3RiqA_lsApMw5m3oo6WGAvde3yP83KD58_9iCbgFEAcBu2klr2a-cOYpubQzM2iV4a-3diTz-ixLJlz"
            } description={"Estilo casual y texturizado para un look contemporáneo."}/>
        </div>
      </section>
    </>
  );
}
