import styles from "./ContactDetails.module.css";

export default function ContactDetails({title, content}) {
  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>{title}</div>
        <div className={styles.contentContainer}>{content}</div>
      </div>
    </>
  );
}
