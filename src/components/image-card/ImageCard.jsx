import styles from "./ImageCard.module.css";

export default function ImageCard({title, imageUrl, description}) {
  return (
    <>
      <article className={styles.card}>
        <div className={styles.cardBody}>
          <img className={styles.imgCard} src={imageUrl} alt="" />
        </div>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardP}>{description}</p>
        </div>
      </article>
    </>
  );
}
