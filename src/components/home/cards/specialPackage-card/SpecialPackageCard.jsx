import styles from "./SpecialPackageCard.module.css";

export default function SpecialPackageCard({title, content}) {
  return (
    <>
      <article className={styles.card}>
        <div className={styles.cardHeader}>
          <div
            className={styles.cardIcon}
            data-icon="Suitcase"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z"></path>
            </svg>
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
