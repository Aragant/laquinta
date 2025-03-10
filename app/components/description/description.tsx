import styles from "./description.module.css";

export default function Description() {
  return (
    <div className={styles.descriptionDiv}>
      <div className={styles.ticketDescription}>
        <h2 className={styles.titleDescription}>Présentation</h2>
        <p className={styles.textDescription}>
          Lucinda Morgado et Thierry Lemaire lancent &quot;La Quinta&quot;, une
          épicerie-traiteur portugaise, pour offrir des saveurs authentiques
          dans une ambiance conviviale.
        </p>
        <p className={styles.signatureDescription}>Bem-vindo</p>
      </div>
    </div>
  );
}
