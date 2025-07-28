import * as C from "./Styles";
import { SideBar } from "../../components/SideBar/SideBar";
import LogoPoupaMais from "../../assets/LogoPoupaMais";
import { MonthlyReport } from "../../components/ChartsSection/ChartsSection";

export const Charts = () => {
  return (
    <>
      <SideBar />
      <C.Container>
        <C.Header>
          <LogoPoupaMais/>
        </C.Header>
        <C.Body>
          <MonthlyReport />
        </C.Body>
      </C.Container>
    </>
  );
};
