import Layout from "../components/layout";
import { IStepper, StepperStatus, Stepper } from "../components/stepper";

function Home({ Component, pageProps }) {
  return <Stepper items={processItems}></Stepper>;
}

export default Home;

const processItems: IStepper[] = [
  {
    name: "Förundersökning",
    status: StepperStatus.active,
    id: "investigation",
  },
  {
    name: "Exekvera",
    status: StepperStatus.disabled,
    id: "execution",
  },
  {
    name: "Bygga",
    status: StepperStatus.disabled,
    id: "building",
  },
  {
    name: "Flytta in",
    status: StepperStatus.disabled,
    id: "moving_in",
  },
  {
    name: "Felanmälningar",
    status: StepperStatus.disabled,
    id: "complaints",
  },
];
