import { useContext, useState } from "react";
import * as C from "./styles";
import { Icon } from "@iconify/react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoPoupaMais from "../../assets/LogoPoupaMais";



export const SideBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { logout } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <C.Container $open={drawerOpen}>
      <C.DrawerButton onClick={() => setDrawerOpen(!drawerOpen)}>
        <Icon
          icon="material-symbols:menu"
          width="36"
          height="36"
          style={{ color: " #fff" }}
        ></Icon>
        {drawerOpen && <LogoPoupaMais color="#fff" />  }
          
      </C.DrawerButton>

      <C.DrawerMenu $open={drawerOpen}>
        <C.HomeButton onClick={()=>navigate("/")}>
          <C.IconWrapper>
            <Icon
              icon="mdi:home"
              width="36"
              height="36"
              style={{ color: "#fff" }}
            />
          </C.IconWrapper>
          {drawerOpen && <C.Label $delay={100}>Início</C.Label>}
        </C.HomeButton>
        <C.ChartsButton onClick={() => navigate("/charts")}>
          <C.IconWrapper>
            <Icon
              icon="mdi:chart-arc"
              width="36"
              height="36"
              style={{ color: "#fff" }}
            />
          </C.IconWrapper>
          {drawerOpen && <C.Label $delay={200}>Gráficos</C.Label>}
        </C.ChartsButton>
        <C.AccountButton onClick={() => navigate("/account")}>
          <C.IconWrapper>
            <Icon
              icon="material-symbols:person"
              width="36"
              height="36"
              style={{ color: "#fff" }}
            />
          </C.IconWrapper>
          {drawerOpen && <C.Label $delay={300}>Conta</C.Label>}
        </C.AccountButton>
        <C.LogoutButton onClick={logout}>
          <C.IconWrapper>
            <C.StyledIcon
              icon="material-symbols:logout"
              width="36"
              height="36"
              style={{ color: "#fff" }}
            />
          </C.IconWrapper>
          {drawerOpen && <C.Label $delay={400}>Sair</C.Label>}
        </C.LogoutButton>
      </C.DrawerMenu>
    </C.Container>
  );
};
