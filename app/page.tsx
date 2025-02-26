import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p>header</p>
        </header>

        <div className={styles.titleDiv}>
          <h1 className={styles.quintaLogo}>
            <Image
              src={"/Laquinta.svg"}
              alt={"Quinta Logo"}
              fill={true}
            ></Image>
          </h1>
          <h1 className={styles.subtitle}>Epicerie ⬝ Traiteur ⬝ Portugais</h1>
        </div>

        <div className={styles.descriptionDiv}>
          <div className={styles.ticketDescription}>
            <h2 className={styles.titleDescription}>Présentation</h2>
            <p className={styles.textDescription}>
              Lucinda Morgado et Thierry Lemaire lancent &quot;La Quinta&quot;,
              une épicerie-traiteur portugaise, pour offrir des saveurs
              authentiques dans une ambiance conviviale.
            </p>
            <p className={styles.signatureDescription}>Bem-vindo</p>
          </div>
        </div>

        <div className={styles.horaireDiv}>
          <div className={styles.vinoServed}>
            <Image
              className={`${styles.vinoServedImage} ${styles.imageFramed}`}
              src={"/vino-served.jpg"}
              alt={"Picture for decorate the page"}
              fill={true}
            ></Image>
          </div>

          <div className={styles.pastel}>
            <Image
              className={`${styles.pastelImage} ${styles.imageFramed}`}
              src={"/pastel.jpg"}
              alt={"Picture for decorate the page"}
              fill={true}
            ></Image>
          </div>

          <div className={styles.ticketHoraire}>
            <h2 className={styles.titleHoraire}>NOS HORAIRES</h2>
            <p className={styles.textHoraire}>
              Períodos específicos do dia determinados para a realização
              <br />
              de atividades, como funcionamento de estabelecimentos,
              <br />
              expediente de trabalho ou horários de transporte.
            </p>

            <table className={styles.horaireTable}>
              <tbody>
                <tr>
                  <td className={styles.dayHoraire} scope="row" colSpan={3}>
                    <h3 className={styles.dayNameHoraire}>
                      Mercredi au vendredi
                    </h3>
                    <p className={styles.timeHoraire}>10h00 - 14h00</p>
                    <p className={styles.timeHoraire}>15h30 - 20h00</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.dayHoraire} colSpan={3}>
                    <h3 className={styles.dayNameHoraire}>Samedi</h3>
                    <p className={styles.timeHoraire}>9h00 - 14h00</p>
                    <p className={styles.timeHoraire}>15h30 - 20h00</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.dayHoraire} colSpan={3}>
                    <h3 className={styles.dayNameHoraire}>Dimanche</h3>
                    <p className={styles.timeHoraire}>9h00-14h00</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.dayHoraire} colSpan={3}>
                    <h3 className={styles.dayNameHoraire}>Lundi et Mardi</h3>
                    <p className={styles.timeHoraire}>Fermé</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.decoHoraire} colSpan={1}>
                    produit.
                  </td>
                  <td className={styles.decoHoraire} colSpan={1}>
                    DATE.
                  </td>
                  <td className={styles.decoSignDiv} colSpan={2}>
                    <p className={styles.decoSign}>À votre service</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.chickenRoast}>
            <Image
              className={`${styles.chickenRoastImage} ${styles.imageFramed}`}
              src={"/chicken-roast.jpg"}
              alt={"Picture for decorate the page"}
              fill={true}
            ></Image>
          </div>
        </div>

        <div className={styles.pauseDiv}>
          <p className={styles.textPause}>
            LES INCON-
            <br />
            TOURNABLES DE LA CUISINE
          </p>
          <p className={styles.portuguesa}>Portuguesa</p>
        </div>

        <div className={`${styles.vinoPresDiv} `}>
            <div className={`${styles.imageFramed} ${styles.vinoPresImage}`}>

            </div>
        </div>
      </main>
    </div>
  );
}
