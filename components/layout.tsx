import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faSearch,
  faStar,
  faStarHalf,
  faStarOfDavid,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Layout({ children }) {
  const [visibleMenu, setvisibleMenu] = useState(false);
  const menuItems = [
    { name: "Hem", link: "/" },
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

  const toggleVisibility = (close?: boolean) => {
    if (close) {
      setvisibleMenu(false);
    } else {
      setvisibleMenu(!visibleMenu);
    }
  };

  const d = new Date();
  const year = d.getFullYear();

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
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
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
              <FontAwesomeIcon size="2x" icon={faStar}></FontAwesomeIcon>
            </button>
          </nav>
          <Link href={"/#"}>
            <div className={styles.logo}>
              <h1
                className={styles.title}
                onClick={() => toggleVisibility(true)}
              >
                House Project
              </h1>
            </div>
          </Link>
        </div>
        {!visibleMenu && (
          <ul className={styles.menu}>
            {menuItems.map((menuItem, idx) => (
              <li key={idx} className={styles.menu_item}>
                <Link href={menuItem.link}>
                  <a onClick={() => toggleVisibility()}>{menuItem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="bg">
        <main className={styles.container}>
          {/* <Stepper items={processItems}></Stepper> */}
          <div className={styles.main}>{children}</div>
        </main>

        <footer className={styles.footer}>© {year} House Project</footer>
        <script
          src="https://kit.fontawesome.com/f3d6559d6e.js"
          crossOrigin="anonymous"
        ></script>
      </div>
    </>
  );
}

export default Layout;
