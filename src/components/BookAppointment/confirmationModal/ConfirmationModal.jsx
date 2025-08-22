import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({ 
  isOpen, 
  onClose, 
  email 
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        
        <div className={styles.iconContainer}>
          <div className={styles.successIcon}>
            <span className={styles.checkmark}>✓</span>
          </div>
        </div>
        
        <h2 className={styles.modalTitle}>
          ¡Cita Confirmada!
        </h2>
        
        <p className={styles.modalMessage}>
          Tu cita ha sido agendada exitosamente. Hemos enviado un correo electrónico con todos los detalles de tu reservación.
        </p>
        
        <div className={styles.emailInfo}>
          <div className={styles.emailLabel}>
            Correo de confirmación enviado a:
          </div>
          <div className={styles.emailText}>
            {email}
          </div>
        </div>

        <div className={styles.premiumReminder}>
          <div className={styles.reminderIcon}>📧</div>
          <p className={styles.reminderText}>
            Recomendación: Revisa tu bandeja de spam y correos no deseados
          </p>
        </div>
        
        <button className={styles.modalButton} onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
}