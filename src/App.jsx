import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

<<<<<<< HEAD
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import QuemSomos from './pages/QuemSomos';
import Termos from './pages/Termos';
=======
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import QuemSomos from "./pages/QuemSomos";
import Termos from "./pages/Termos";
import SelectPage from "./pages/SelectPage";
import Atacado from "./pages/Atacado";
import PoliticaFrete from "./pages/PoliticaFrete";
import BuyPage from "./pages/BuyPage";
import FormSent from "./pages/FormSent";
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39

function App() {
  TagManager.initialize({ gtmId: "GTM-MQTBS5Z" });

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/termos" element={<Termos />} />
<<<<<<< HEAD
=======
        <Route path="/select-page" element={<SelectPage />} />
        <Route path="/atacado" element={<Atacado />} />
        <Route path="/politica-frete" element={<PoliticaFrete />} />
        <Route path="/buy-page" element={<BuyPage />} />
        <Route path="/form-sent" element={<FormSent />} />
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
      </Routes>
    </>
  );
}

export default App;
