import * as C from "./Styles";
import { SideBar } from "../../components/SideBar/SideBar";
import LogoPoupaMais from "../../assets/LogoPoupaMais";
import { CardsSection } from "../../components/CardSection/CardsSection";
import { MonthlyReport } from "../../components/ChartsSection/ChartsSection";


export const Charts = () => {
  return (
    <>
      <SideBar />
      <C.Container>
        <C.Header></C.Header>
        <C.Body>
          <LogoPoupaMais color="#111" />
          <CardsSection/>
        <MonthlyReport/>
        </C.Body>
      </C.Container>
    </>
  );
};
