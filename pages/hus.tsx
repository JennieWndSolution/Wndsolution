import styles from "../styles/Home.module.scss";

function Hus() {
  const houses = [
    {
      name: "Fiskarhedenvillan",
      link: "https://fiskarhedenvillan.se/",
      img: "/fiskarhedenvillan.jpeg",
      alt: "Fiskarhedenvillan",
      likable_houses: [
        {
          house_name: "Sidus",
          house_link:
            "https://fiskarhedenvillan.se/valj-ditt-hus/husmodeller/sidus/",
        },
      ],
    },
    {
      name: "Eksjöhus",
      link: "https://www.eksjohus.se/",
      img: "/eksjohus.jpeg",
      alt: "Eksjöhus",
      likable_houses: [{ house_name: "", house_link: "" }],
    },
    {
      name: "Myrsjöhus",
      link: "https://www.myresjohus.se/",
      img: "/myrsjohus.jpeg",
      alt: "Myrsjöhus",
      likable_houses: [{ house_name: "", house_link: "" }],
    },
    {
      name: "Anebyhus",
      link: "https://anebyhusgruppen.se/",
      img: "/anebyhus_vinkel_900x600.jpg",
      alt: "Anebyhus",
      likable_houses: [{ house_name: "", house_link: "" }],
    },
    {
      name: "Götenehus",
      link: "https://gotenehus.se/",
      img: "/ekhem-2020-1344x731.jpg",
      alt: "Götenehus",
      likable_houses: [{ house_name: "", house_link: "" }],
    },
    {
      name: "Älvsbyhus",
      link: "https://www.alvsbyhus.se/",
      img: "/alvsbyhus.jpg",
      alt: "Älvsbyhus",
      likable_houses: [{ house_name: "", house_link: "" }],
    },
    {
      name: "Smålandsvillan",
      link: "https://www.smalandsvillan.se/",
      img: "/smalandsvillan.jpg",
      alt: "Smålandsvillan",
      likable_houses: [{ house_name: "", house_link: "" }],
    },
    {
      name: "Trivselhus",
      link: "https://www.trivselhus.se/",
      img: "/trivselhus.jpg",
      alt: "Trivselhus",
      likable_houses: [{ house_name: "", house_link: "" }],
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
            {house.likable_houses.map((h, h_idx) => (
              <div key={h_idx}>
                Hus vi gillar: <a href={h.house_link}>{h.house_name}</a>
              </div>
            ))}
          </div>
          {/* <div className={styles.footer}>Lorem footer</div> */}
        </div>
      ))}
    </div>
  );
}

export default Hus;
