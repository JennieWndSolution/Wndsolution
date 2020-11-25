import styles from "../styles/Home.module.scss";

function Hus() {
  const houses = [
    {
      name: "Fiskarhedenvillan",
      link: "https://fiskarhedenvillan.se/",
      img: "/fiskarhedenvillan.jpeg",
      alt: "Fiskarhedenvillan",
    },
    {
      name: "Eksjöhus",
      link: "https://www.eksjohus.se/",
      img: "/eksjohus.jpeg",
      alt: "Eksjöhus",
    },
    {
      name: "Myrsjöhus",
      link: "https://www.myresjohus.se/",
      img: "/myrsjohus.jpeg",
      alt: "Myrsjöhus",
    },
    {
      name: "Anebyhus",
      link: "https://anebyhusgruppen.se/",
      img: "",
      alt: "Anebyhus",
    },
    {
      name: "Götenehus",
      link: "https://gotenehus.se/",
      img: "",
      alt: "Götenehus",
    },
    {
      name: "Älvsbyhus",
      link: "https://www.alvsbyhus.se/",
      img: "",
      alt: "Älvsbyhus",
    },
    {
      name: "Smålandsvillan",
      link: "https://www.smalandsvillan.se/",
      img: "",
      alt: "Smålandsvillan",
    },
    {
      name: "Trivselhus",
      link: "https://www.trivselhus.se/",
      img: "",
      alt: "Trivselhus",
    },
  ];
  return (
    <div className={styles.house}>
      {houses.map((house, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.header}>
            <a href={house.link} target="_blank">
              <img src={house.img} alt={house.alt} />
            </a>
          </div>
          <div className={styles.body}>
            {house.name} Exempel på hus vi gillar
          </div>
          <div className={styles.footer}>Lorem footer</div>
        </div>
      ))}
    </div>
  );
}

export default Hus;
