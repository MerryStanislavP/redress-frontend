import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./styles/main.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HelpPage from "./HelpPage";
import Layout from "./Layout";
import Registration from "./Registration";
import RegistrationForm from "./RegistrationForm"; // додай цей імпорт
import MainPage from "./MainPage";
const clientId =
  "587875719115-mgdk3iaeh1t65f9uca8i8vlee2bql5f5.apps.googleusercontent.com";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <MainContent />
              </Layout>
            }
          />
          <Route
            path="/help"
            element={
              <Layout>
                <HelpPage />
              </Layout>
            }
          />
          <Route
            path="/registration"
            element={
              <Layout>
                <Registration />
              </Layout>
            }
          />
          <Route
            path="/registration-form"
            element={
              <Layout>
                <RegistrationForm />
              </Layout>
            }
          />
          <Route
            path="/main-page"
            element={
              <Layout>
                <MainPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

const MainContent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistrationClick = () => {
    navigate("/registration");
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Зупиняє перезавантаження сторінки

    if (!email || !password) {
      setErrorMessage("Будь ласка, заповніть усі поля.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Вхід успішний:", data);
        navigate("/"); // Наприклад, до профілю
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "Невірний email або пароль.");
      }
    } catch (error) {
      console.error("Помилка входу:", error);
      setErrorMessage("Сталась помилка під час входу.");
    }
  };

  return (
    <main>
      <div className="background-image"></div>
      <div className="login-form">
        <div className="background"></div>
        <span className="additional">Не можете увійти? Забули пароль?</span>

        <div className="login-btn-container">
          <button
            type="button"
            className="login-btn"
            id="loginBtn"
            onClick={(e) => handleLogin(e)}
          >
            Увійти
          </button>
        </div>

        {errorMessage && (
          <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            {errorMessage}
          </div>
        )}

        <span className="or-text">або</span>
        <div className="facebook-auth-btn-container">
          <button className="facebook-auth-btn" id="facebookAuthBtn">
            <div className="facebook-auth-icon"></div>
            <span className="facebook-auth-text">Продовжити з Facebook</span>
          </button>
        </div>
        <div className="google-auth-btn-container">
          <button className="google-auth-btn" id="googleAuthBtn">
            <span className="google-auth-text">Продовжити з Google</span>
            <div className="google-auth-icon"></div>
          </button>
        </div>
        <div className="login-container">
          <button type="button" className="login-option-btn">
            Вхід
          </button>
        </div>
        <div className="registration-container">
          <button
            type="button"
            className="registration-option-btn"
            id="registrationOptionBtn"
            onClick={handleRegistrationClick}
          >
            Реєстрація
          </button>
        </div>
        <span className="login-text">Електронна пошта*</span>
        <span className="password-text">Пароль*</span>
        <div className="login-input-container">
          <input
            className="login-input"
            type="text"
            placeholder="Введіть email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-input-container">
          <input
            className="password-input"
            type="password"
            placeholder="Введіть пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
