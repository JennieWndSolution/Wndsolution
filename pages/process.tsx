import "../styles/Home.module.scss";
import { IStepper, Stepper } from "../components/stepper";

function Process() {
  const processItems: IStepper[] = [
    {
      name: "Ekonomisk inställning",
      active: true,
      id: "position",
      heading: "sdfsf",
    },
    {
      name: "Hitta temp boende",
      active: false,
      id: "temp",
      heading: "Sthlm bostadskö",
    },
    {
      name: "Sälja lgh",
      active: false,
      id: "selling",
      heading: "Mäklare, lägsta accepterade bud",
    },
    {
      name: "Köpa tomt",
      active: false,
      id: "buying",
      heading: "Vilka områden finns",
    },
    {
      name: "Välj hus",
      active: false,
      id: "picking",
      heading: "Vilka hus är intressanta",
    },
    {
      name: "Bygglovsansökan",
      active: false,
      id: "permitt",
      heading: "Är ansökan inskickad",
    },
    { name: "Bygg hus", active: false, id: "building", heading: "Bugger" },
    {
      name: "Flytta in",
      active: false,
      id: "moving",
      heading: "Fylttar vi in",
    },
  ];

  return (
    <div>
      <Stepper items={processItems}></Stepper>
    </div>
  );
}

export default Process;
