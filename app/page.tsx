"use client";

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

          <div className={styles.ticketHoraire}>
            <div className={styles.pastel}>
              <Image
                className={`${styles.pastelImage} ${styles.imageFramed}`}
                src={"/pastel.jpg"}
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
          <div
            className={`${styles.imageFramed} ${styles.vinoPresImage}`}
          ></div>
        </div>

        <div className={styles.addressDiv}>
          <div className={styles.cardAddress}>
            <div className={styles.portugalDiv}>
              <Image
                src={"/Portugal.png"}
                alt={"Picture for decorate the page"}
                fill={true}
              ></Image>
            </div>

            <div className={styles.textAddressDiv}>
              <h3 className={styles.titleAddress}>Nous rendre visite</h3>
              <p className={styles.subtitleAddress}>
                Toutes les saveurs du Portugal
              </p>

              <p className={styles.roundedTitleAddress}>Notre adresse</p>
              <p className={styles.textStreetAddress}>
                20 rue maurice
                <br />
                berteaux
              </p>

              <p className={styles.textCityAddress}>
                78700 Conflans-
                <br />
                Sainte-Honorine
              </p>

              <hr className={styles.lineAddress} />

              <p className={styles.roudedEndText}>Mot de la fin</p>

              <p className={styles.textSignAddress}>
                Découvrez les saveurs
                <br />
                du Portugal dans une
                <br />
                ambiance chaleureuse.
                <br />À bientôt chez nous !
              </p>

              <p className={styles.endTextAddress}>
                20 rue Maurice Berteaux, 78700 Conflans-Sainte-Honorine
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerDiv}>
          <div className={styles.infoFooterDiv}>
            <div className={styles.textFooterDiv}>
              <h3 className={styles.titleFooter}>Obrigado !</h3>
              <p className={styles.textFooter}>
                Spécialisé dans la nourriture
                <br />
                portugaise, n’hésitez pas à nous
                <br />
                contacter si vous avez
                <br />
                des demandes particulières.
              </p>
            </div>

            <div className={styles.contactFooter}>
              <p className={styles.textContactFooter}>
                laquinta78@outlook.com
                <br />
                +33 7 72 16 94 00
                <br />
                +33 1 30 65 35 49
              </p>
            </div>

            <table className={styles.socialFooter}>
              <tbody>
                <tr>
                  <td
                    scope="row"
                    className={styles.textSocialFooter}
                    id={styles.firstCellSocialFooter}
                  >
                    2025 ©LAQUINTA
                  </td>
                  <td className={styles.textSocialFooter}>INSTAGRAM</td>
                  <td className={styles.textSocialFooter}>FACEBOOK</td>
                  <td
                    className={styles.textSocialFooter}
                    id={styles.lastCellSocialFooter}
                  >
                    CREDITS
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.imageFooterDiv}>
            <div className={styles.discountTicketFooter}>
              <div className={styles.titleDiscountFooterDiv}>
                <h4 className={styles.titleDiscountFooter}>À bientôt</h4>
                <p className={styles.subtitleDiscountFooter}>Até breve</p>
              </div>
              <div className={styles.circleDiscountDiv}>
                <p className={styles.circleDiscount}>01</p>
                <p className={styles.circleDiscount}>02</p>
                <p className={styles.circleDiscount}>03</p>
                <p className={styles.circleDiscount}>04</p>
                <p className={styles.circleDiscount}>05</p>
                <p className={styles.circleDiscount}>06</p>
                <p className={styles.circleDiscount}>07</p>
                <p className={styles.circleDiscount}>08</p>
                <div className={styles.circleDiscount} id={styles.redChickenDiv}>
                  <div className={styles.redChickenDiscount}>
                    <Image
                    
                    src={"/red-chicken.svg"}
                    alt="Picture for decorate the page"
                    fill={true}
                    >

                    </Image>
                  </div>
                </div>
              </div>

              <p className={styles.textEndDiscountFooter}>@la-quinta</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
