import { useEffect, useRef, useState } from "react";
import styles from "./OurServicesCard.module.css";

export default function OurServicesCard({
  title,
  description,
  price,
  age,
  imgUrl,
  delay = 0,
  titleColor = "#ffffff",
  priceColor = "white"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 200);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.9, 
        rootMargin: "50px",       
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <>
      <article
        ref={cardRef}
        className={`${styles.ourServicesCard} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <div className={styles.infoContainer}>
          <h2 
            className={styles.cardTitle}
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          <p className={styles.cardDescription}>{description}</p>
          <p className={styles.cardAge}>{age}</p>
          <p 
            className={styles.cardPrice}
            style={{ color: priceColor }}
          >
            {price}
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.thumbnail}
            src={imgUrl}
            alt={`Servicio de ${title}`}
          />
        </div>
      </article>
    </>
  );
}