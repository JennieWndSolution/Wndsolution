import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wndsolution</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <header className={styles.header}>
        <Link href={"/"}>
          <h1 className={styles.title}>Wndsolution</h1>
        </Link>
      </header>

      <main className={styles.container}>
        <div className={styles.main}>{children}</div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}

export default Layout;
