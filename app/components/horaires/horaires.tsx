import styles from "./horaires.module.css";
import Image from "next/image";

export default function Horaires() {
  return (
    <div className={styles.horaireDiv}>
      <div className={styles.horaireLittleScreen}>
        <div className={styles.vinoServed}>
          <Image
            className={`${styles.vinoServedImage} ${styles.imageFramed}`}
            src={"/laquinta/vino-served.jpg"}
            alt={"Picture for decorate the page"}
            fill={true}
          ></Image>
        </div>

        <div className={styles.ticketHoraire}>
          <div className={styles.pastel}>
            <Image
              className={`${styles.pastelImage} ${styles.imageFramed}`}
              src={"/laquinta/pastel.jpg"}
              alt={"Picture for decorate the page"}
              fill={true}
            ></Image>
          </div>

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
                  <p className={styles.timeHoraire}>16h00 - 19h30</p>
                </td>
              </tr>
              <tr>
                <td className={styles.dayHoraire} colSpan={3}>
                  <h3 className={styles.dayNameHoraire}>Samedi</h3>
                  <p className={styles.timeHoraire}>9h30 - 13h30</p>
                  <p className={styles.timeHoraire}>15h30 - 19h30</p>
                </td>
              </tr>
              <tr>
                <td className={styles.dayHoraire} colSpan={3}>
                  <h3 className={styles.dayNameHoraire}>Dimanche</h3>
                  <p className={styles.timeHoraire}>9h00-13h00</p>
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
            src={"/laquinta/chicken-roast.jpg"}
            alt={"Picture for decorate the page"}
            fill={true}
          ></Image>
        </div>
      </div>

      <div className={styles.horaireBigScreen}>
        <div className={styles.ticketHoraire}>
          <h2 className={styles.titleHoraire}>NOS HORAIRES</h2>
          <p className={styles.textHoraire}>
            Períodos específicos do dia determinados para a realização de
            atividades,
            <br />
            como funcionamento de estabelecimentos, expediente de trabalho ou
            <br />
            horários de transporte.
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
                  <p className={styles.decoSign}>
                    À votre
                    <br />
                    service
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.imageDecoHoraire}>
          <div className={styles.vinoServed}>
            <Image
              className={`${styles.vinoServedImage} ${styles.imageFramed}`}
              src={"/laquinta/vino-served.jpg"}
              alt={"Picture for decorate the page"}
              fill={true}
            ></Image>
          </div>
          <div className={styles.pastel}>
            <Image
              className={`${styles.pastelImage} ${styles.imageFramed}`}
              src={"/laquinta/pastel.jpg"}
              alt={"Picture for decorate the page"}
              fill={true}
            ></Image>
          </div>

          <div className={styles.chickenRoast}>
            <Image
              className={`${styles.chickenRoastImage} ${styles.imageFramed}`}
              src={"/laquinta/chicken-roast.jpg"}
              alt={"Picture for decorate the page"}
              fill={true}
            ></Image>
          </div>  
        </div>
      </div>
    </div>
  );
}
