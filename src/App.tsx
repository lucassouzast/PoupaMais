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

  useEffect(() => {
    let timer: number;
    if (showInstall || showIosTip) {
      timer = window.setTimeout(() => {
        setShowInstall(false);
        setShowIosTip(false);
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [showInstall, showIosTip]);

  useEffect(() => {
    if (isIos()) {
      setShowIosTip(true);
    }
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setShowInstall(false);
      });
    }
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
        <PwaPromptWrapper>
          <span style={{ flex: 1 }}>
            Adicione o Poupa+ à tela inicial para acessar mais rápido!
          </span>
          <PwaPromptButton onClick={handleInstallClick}>
            Adicionar à tela inicial
          </PwaPromptButton>
          <PwaPromptClose onClick={() => setShowInstall(false)} title="Fechar">
            ×
          </PwaPromptClose>
        </PwaPromptWrapper>
      )}
      {showIosTip && (
        <PwaPromptWrapper>
          <span style={{ flex: 1 }}>
            Para instalar o Poupa+ no iPhone, toque no botão de compartilhar
            <span role="img" aria-label="compartilhar"> ⬆️ </span>
            e depois em <b>“Adicionar à Tela de Início”</b>.
          </span>
          <PwaPromptClose onClick={() => setShowIosTip(false)} title="Fechar">
            ×
          </PwaPromptClose>
        </PwaPromptWrapper>
      )}
    </>
  );
};

export default App;
