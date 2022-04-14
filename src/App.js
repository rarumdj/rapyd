import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// eslint-disable-next-line
import "swiper/css/bundle";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Navbar, Footer } from "./views/landing/components";
import { Home, Faqs, Policy, Terms } from "./views/landing/pages";
import {
  Login,
  Register,
  ForgotPassword,
  CompleteForgotPassword,
  VerifyEmail,
  ResetPassword,
} from "./views/auth/pages";

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
