// src/App.tsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./screens/Login/Login";
import { Charts } from "./screens/Charts/Charts";
import { Home } from "./screens/Home/Home";
import { Account } from "./screens/Account/Account";
import { EntriesProvider } from "./contexts/EntriesContext";



const App = () => {


  return (
    <>
      <Router>
        <AuthProvider>
        <EntriesProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
          </EntriesProvider>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
