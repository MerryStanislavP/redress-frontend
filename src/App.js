import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./styles/main.css";
import HelpPage from "./pages/HelpPage";
import Registration from "./pages/Registration";
import RegistrationForm from "./pages/RegistrationForm"; // додай цей імпорт
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import AdFormPage from "./pages/AdFormPage";
import Header from "./components/Header";
import FooterDynamic from "./components/FooterDynamic";
import CatalogPage from "./pages/CatalogPage";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
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
              <>
                <Header />
                <LoginPage />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/ad-form"
            element={
              <>
                <Header />
                <AdFormPage />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/help"
            element={
              <>
                <Header />
                <HelpPage />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/registration"
            element={
              <>
                <Header />
                <Registration />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/registration-form"
            element={
              <>
                <Header />
                <RegistrationForm />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/main-page"
            element={
              <>
                <Header />
                <MainPage />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/catalog-page/:sex"
            element={
              <>
                <Header />
                <CatalogPage />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
                <FooterDynamic />
              </>
            }
          />
          <Route
            path="/edit-profile-page"
            element={
              <>
                <Header />
                <EditProfile />
                <FooterDynamic />
              </>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
