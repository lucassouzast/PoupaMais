// src/pages/Login.tsx
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { getApi, LoginService, RegisterService } from "../../services/auth.services";
import * as C from "./styles";
import LogoPoupaMais from "../../assets/LogoPoupaMais";
import economiaImg from "../../assets/economia.jpg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./formTransition.css";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    getApi().then((res) => {
      console.log(res);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (isRegister) {
      // Validação para registro
      if (!name.trim()) {
        alert("Digite seu nome.");
        return;
      }
      if (!validateEmail(email)) {
        alert("Digite um e-mail válido.");
        return;
      }
      if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      }

      const res: any = await RegisterService({ name, email, password });
      if (res?.data?.token?.length > 0) {
        login(res.data.token);
        navigate("/");
      } else {
        alert("Erro ao registrar. Tente novamente.");
      }
      return;
    }

    // Validação para login
    if (!validateEmail(email)) {
      alert("Digite um e-mail válido.");
      return;
    }
    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    const res: any = await LoginService({ email, password });

    if (res?.data?.token?.length > 0) {
      login(res.data.token);
      navigate("/");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <C.PageWrapper>
      <C.RightContainer>
        <C.LogoWrapper>
          <LogoPoupaMais/>
        </C.LogoWrapper>
        <C.StyledForm onSubmit={handleSubmit}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={isRegister ? "register" : "login"}
              timeout={300}
              classNames="fade"
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {isRegister && (
                  <C.StyledInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                  />
                )}
                <C.StyledInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                />
                <C.StyledInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                />
                <C.StyledButton type="submit">
                  {isRegister ? "Registrar" : "Entrar"}
                </C.StyledButton>
                <C.StyledButton
                  type="button"
                  style={{
                    background: "transparent",
                    color: "#2c6e49",
                    border: "1.5px solid #2c6e49",
                    marginTop: 0,
                    boxShadow: "none",
                  }}
                  onClick={() => setIsRegister((prev) => !prev)}
                >
                  {isRegister ? "Já tenho conta" : "Quero me registrar"}
                </C.StyledButton>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </C.StyledForm>
      </C.RightContainer>
      <C.LeftContainer>
        <img src={economiaImg} alt="Economias e vida financeira" />
      </C.LeftContainer>
    </C.PageWrapper>
  );
};
