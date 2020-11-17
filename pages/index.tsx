import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const items = [
    { text: "1", link: "" },
    { text: "2", link: "" },
    { text: "3", link: "" },
    { text: "4", link: "" },
    { text: "4", link: "" },
    { text: "4", link: "" },
    { text: "4", link: "" },
    { text: "4", link: "" },
    { text: "4", link: "" },
  ];

  return (
    <>
      {items.map((item, idx) => (
        <Link href={item.link} key={idx}>
          <a className={styles.card}>
            <div className={styles.cardCon}>
              <h3>{item.text}</h3>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}
