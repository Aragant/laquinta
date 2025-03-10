import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
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
                ></Image>
              </div>
            </div>
          </div>

          <p className={styles.textEndDiscountFooter}>@la-quinta</p>
        </div>
      </div>
    </div>
  );
}
