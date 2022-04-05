import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import CompleteForgotPassword from "./pages/CompleteForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/forgot-password/sucess"
            element={<CompleteForgotPassword />}
          ></Route>
          <Route path="/password-reset" element={<ResetPassword />}></Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
