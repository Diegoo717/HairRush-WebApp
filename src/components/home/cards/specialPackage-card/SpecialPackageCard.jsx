import { useEffect, useRef } from "react";
import styles from "./SpecialPackageCard.module.css";

export default function SpecialPackageCard({title, content, icon}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            
            card.style.animation = 'none';
            card.style.transform = 'rotateX(-8deg) rotateY(2deg) translateZ(20px)';
            card.style.borderColor = '#5a6268';
            
            const beforeElement = window.getComputedStyle(card, '::before');
            card.classList.add(styles.shimmerEffect);

            setTimeout(() => {
              card.style.transform = 'translateZ(0)';
              card.style.borderColor = '#42474d';
              card.classList.remove(styles.shimmerEffect);
            }, 800);
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
        rootMargin: '0px'
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
  }, []);

  return (
    <>
      <article 
        ref={cardRef}
        className={styles.card}
      >
        <div className={styles.cardHeader}>
          <div
            className={styles.cardIcon}
            data-icon="Custom"
            data-size="24px"
            data-weight="regular"
          >
            {icon}
          </div>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardP}>
            {content}
          </p>
        </div>
      </article>
    </>
  );
}