// src/App.tsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./screens/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./screens/Home/Home";
import { PwaPromptWrapper, PwaPromptButton, PwaPromptClose } from "./components/PwaInstallPrompt";

function isIos() {
  return (
    /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()) &&
    !window.navigator.userAgent.toLowerCase().includes("crios")
  );
}

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [showIosTip, setShowIosTip] = useState(false);

  // Checa se o usuário já fechou o aviso
  useEffect(() => {
    const alreadyClosed = localStorage.getItem("pwaPromptClosed");
    if (alreadyClosed === "true") return;

    if (isIos()) {
      setShowIosTip(true);
    }
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // Para Android/Chrome: se o evento não disparar, mostra o aviso mesmo assim
    setTimeout(() => {
      if (!window.matchMedia('(display-mode: standalone)').matches && !deferredPrompt && !isIos()) {
        setShowInstall(true);
      }
    }, 1000);

    return () => window.removeEventListener("beforeinstallprompt", handler);
    // eslint-disable-next-line
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setShowInstall(false);
        localStorage.setItem("pwaPromptClosed", "true");
      });
    }
  };

  const handleClose = () => {
    setShowInstall(false);
    setShowIosTip(false);
    localStorage.setItem("pwaPromptClosed", "true");
  };

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
      {showInstall && (
        <PwaPromptWrapper $show={showInstall}>
          <span style={{ flex: 1 }}>
            Adicione o Poupa+ à tela inicial para acessar mais rápido!
          </span>
          {deferredPrompt ? (
            <PwaPromptButton onClick={handleInstallClick}>
              Adicionar à tela inicial
            </PwaPromptButton>
          ) : (
            <span style={{ color: "#888", fontSize: "0.95em", marginTop: 8 }}>
              Use o menu do navegador para adicionar à tela inicial.
            </span>
          )}
          <PwaPromptClose onClick={handleClose} title="Fechar">
            ×
          </PwaPromptClose>
        </PwaPromptWrapper>
      )}
      {showIosTip && (
        <PwaPromptWrapper $show={showIosTip}>
          <span style={{ flex: 1 }}>
            Para instalar o Poupa+ no iPhone, toque no botão de compartilhar
            <span role="img" aria-label="compartilhar"> ⬆️ </span>
            e depois em <b>“Adicionar à Tela de Início”</b>.
          </span>
          <PwaPromptClose onClick={handleClose} title="Fechar">
            ×
          </PwaPromptClose>
        </PwaPromptWrapper>
      )}
    </>
  );
};

export default App;
