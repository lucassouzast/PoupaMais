import * as C from "./Styles";
import { SideBar } from "../../components/SideBar/SideBar";
import LogoPoupaMais from "../../assets/LogoPoupaMais";

export const Account = () => {
  return (
    <>
      <SideBar />
      <C.Container>
        <C.Header></C.Header>
        <C.Body>
          <LogoPoupaMais color="#111" />
          CONTA
        </C.Body>
      </C.Container>
    </>
  );
};
