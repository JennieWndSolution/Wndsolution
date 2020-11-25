import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

function Layout({ children }) {
  const [visibleMenu, setvisibleMenu] = useState(false);
  const menuItems = [
    { name: "Husleverantörer", link: "/hus" },
    { name: "Områden", link: "/areas" },
    { name: "Kalkyl", link: "/budget" },
    { name: "Krav/Önskelista", link: "/krav" },
    { name: "Bank", link: "/bank" },
    { name: "Admin/Juridik", link: "/admin" },
    { name: "Mellanboende", link: "/tempLiving" },
    { name: "Lärdommar", link: "/lessons" },
    { name: "Inspiration", link: "/inspiration" },
    { name: "Process", link: "/process" },
  ];

  useEffect(() => {
    setvisibleMenu(!visibleMenu);
  }, []);

  const toggleVisibility = () => {
    setvisibleMenu(!visibleMenu);
  };

  return (
    <>
      <Head>
        <title>House Project</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          as="style"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
        ></link>
      </Head>

      <header className={styles.header} role="banner">
        <div className={styles.innerHeader}>
          <nav className={styles.hamburger}>
            <button
              className={styles.navbar_toggler}
              type="button"
              onClick={() => toggleVisibility()}
            >
              <i aria-hidden className="fas fa-hamburger fa-3x"></i>
            </button>
          </nav>
          <Link href={"/"}>
            <div className={styles.logo}>
              <h1 className={styles.title}>House Project</h1>
            </div>
          </Link>
        </div>
        {!visibleMenu && (
          <ul className={styles.menu}>
            {menuItems.map((menuItem, idx) => (
              <li key={idx} className={styles.menu_item}>
                <Link href={menuItem.link}>
                  <a className="test" onClick={() => toggleVisibility()}>
                    {menuItem.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main className={styles.container}>
        <div className={styles.main}>{children}</div>
      </main>

      <footer className={styles.footer}>© 2020 House Project</footer>
      <script
        src="https://kit.fontawesome.com/f3d6559d6e.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default Layout;
