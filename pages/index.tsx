import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        <Link href="/documentation">
          <a className={styles.card}>
            <div className={styles.cardCon}>
              <h3>Dokumentation &rarr;</h3>
              <p>Bra länkar och information.</p>
            </div>
          </a>
        </Link>

        <Link href="/todo">
          <a className={styles.card}>
            <div className={styles.cardCon}>
              <h3>Att titta på &rarr;</h3>
              <p>Tekniker, ramverk etc.</p>
            </div>
          </a>
        </Link>

        <Link href="/examples">
          <a className={styles.card}>
            <div className={styles.cardCon}>
              <h3>Exempel &rarr;</h3>
              <p>Exempel och implementationer.</p>
            </div>
          </a>
        </Link>

        <div className={styles.circle}></div>
      </div>
    </Layout>
  );
}
