import styles from "./OurServicesCard.module.css";

export default function OurServicesCard({ title, description, price, age, imgUrl}) {
  return (
    <>
      <article className={styles.ourServicesCard}>
        <div className={styles.infoContainer}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
          <p className={styles.cardAge}>{age}</p>
          <p className={styles.cardPrice}>{price}</p>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.thumbnail}
            src={imgUrl}
          />
        </div>
      </article>
    </>
  );
}
