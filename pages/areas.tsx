import styles from "../styles/Home.module.scss";
import Iframe from "react-iframe";

export default function Areas() {
  const areas = [
    {
      name: "Vidja",
      url: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJT8N9UUV6X0YREDuNsvX-AAo&&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      link:
        "https://www.huddinge.se/stadsplanering-och-trafik/planer-projekt-och-arbeten/pagaende-planer-projekt-och-arbeten-via-lista/trangsund/vidja-etapp-2--omvandling-av-fritidshusomrade/",
    },
    {
      name: "Gladö kvarn",
      url: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpbbdR3xwX0YRADuNsvX-AAo&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      link:
        "https://www.huddinge.se/stadsplanering-och-trafik/planer-projekt-och-arbeten/pagaende-planer-projekt-och-arbeten-via-lista/sjodalen-fullersta/glado-kvarn---utbyggnad-av-gator-vatten-och-avlopp/",
    },
    {
      name: "Glömsta",
      url: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJVlR7zRxX0YRgdEbNfT-ACY&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      link:
        "https://www.huddinge.se/stadsplanering-och-trafik/huddinge-bygger/sydvastra/glomsta/",
    },
  ];
  return (
    <div className={styles.card_container}>
      {areas.map((area, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.card_header}>
            <h2 className={styles.card_title}>{area.name}</h2>
          </div>
          <div className={styles.card_body}>
            <a href={area.link} target="_blank">
              <Iframe width="100%" height="100%" url={area?.url} />
            </a>
          </div>
          {/* <div className={styles.footer}>Lorem footer</div> */}
        </div>
      ))}
    </div>
  );
}
