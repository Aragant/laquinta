import styles from "./description.module.css";

export default function Description() {
  return (
    <div className={styles.descriptionDiv}>
      <div className={styles.ticketDescription}>
        <h2 className={styles.titleDescription}>Présentation</h2>
        <p className={styles.textDescription}>
          Lucinda Lemaire<br/>et Thierry Lemaire<br/>lancent &quot;La Quinta&quot;,<br/>une
          épicerie-traiteur<br/>portugaise, pour<br/>offrir des saveurs<br/>authentiques
          dans<br/>une ambiance<br/>conviviale.
        </p>
        <p className={styles.signatureDescription}>Bem-vindo</p>
      </div>
    </div>
  );
}
