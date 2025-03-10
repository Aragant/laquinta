import styles from "./title.module.css";
import Image from "next/image";

export default function Description() {
  return (
    <div className={styles.titleDiv}>
      <h1 className={styles.quintaLogo}>
        <Image src={"/Laquinta.svg"} alt={"Quinta Logo"} fill={true}></Image>
      </h1>
      <h1 className={styles.subtitle}>Epicerie ⬝ Traiteur ⬝ Portugais</h1>
    </div>
  );
}
