import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// eslint-disable-next-line
import "swiper/css/bundle";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./views/landing/components/Navbar";
import Footer from "./views/landing/components/Footer";
import Home from "./views/landing/pages/Home";
import Faqs from "./views/landing/pages/Faqs";
import Policy from "./views/landing/pages/Policy";
import Terms from "./views/landing/pages/Terms";
import Register from "./views/auth/pages/Register";
import Login from "./views/auth/pages/Login";
import ForgotPassword from "./views/auth/pages/ForgotPassword";
import CompleteForgotPassword from "./views/auth/pages/CompleteForgotPassword";
import VerifyEmail from "./views/auth/pages/VerifyEmail";
import ResetPassword from "./views/auth/pages/ResetPassword";

function App() {
  const location = useLocation();

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
  };

  const DefaultRoutes = () => {
    return (
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/policy" element={<Policy />}></Route>
            <Route path="/faqs" element={<Faqs />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <AnimatePresence>
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<DefaultRoutes />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/forgot-password/success"
            element={<CompleteForgotPassword />}
          ></Route>
          <Route path="/password-reset" element={<ResetPassword />}></Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
