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
      <img
        className={styles.homePage}
        src="https://i.pinimg.com/originals/27/02/48/2702489cfb0b9f8aec2f827ae461f528.jpg"
        alt=""
      />
    </>
  );
}
