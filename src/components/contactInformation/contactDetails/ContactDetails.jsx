import styles from "./ContactDetails.module.css";

const getEmojiForTitle = (title) => {
  switch (title.toLowerCase()) {
    case 'dirección':
      return '📍';
    case 'horarios de atención':
      return '🕐';
    case 'telefono':
      return '📞';
    case 'correo':
      return '📧';
    default:
      return '📋';
  }
};

const formatContent = (title, content) => {
  switch (title.toLowerCase()) {
    case 'horarios de atención':
      return content.split('\n').map((line, index) => (
        <div key={index}>
          {line.includes('Lunes a Viernes') ? (
            <strong className={styles.highlighted}>{line}</strong>
          ) : line.includes('Sábados y Domingos') ? (
            <span className={styles.weekendText}>{line}</span>
          ) : (
            line
          )}
        </div>
      ));
    case 'telefono':
      return <strong className={styles.phoneNumber}>{content}</strong>;
    case 'correo':
      return <strong className={styles.email}>{content}</strong>;
    case 'dirección':
      return <span className={styles.address}>{content}</span>;
    default:
      return content;
  }
};

export default function ContactDetails({title, content}) {
  const emoji = getEmojiForTitle(title);
  const formattedContent = formatContent(title, content);

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.emoji}>{emoji}</span>
          <span className={styles.titleText}>{title}</span>
        </div>
        <div className={styles.contentContainer}>
          {formattedContent}
        </div>
      </div>
    </>
  );
}