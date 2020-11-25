import styles from "../styles/Home.module.scss";

function TempLiving() {
  return (
    <div>
      <div className={styles.card}>Sthlm bostadskö</div>
      <div className={styles.card}>Nynäshamns bostadskö</div>
      <div className={styles.card}>HSB</div>
      <div className={styles.card}>
        Facebookgrupper med boende, Köp, byt, sälj i Nacka Värmdö
      </div>
    </div>
  );
}

export default TempLiving;
