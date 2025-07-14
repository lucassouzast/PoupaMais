import * as C from "./Styles";
import { SideBar } from "../../components/SideBar/SideBar";
import LogoPoupaMais from "../../assets/LogoPoupaMais";

export const Account = () => {
  return (
    <>
      <SideBar />
      <C.Container>
        <C.Header>
          <LogoPoupaMais color="#fff" />
        </C.Header>
        <C.Body>
          CONTA
        </C.Body>
      </C.Container>
    </>
  );
};
