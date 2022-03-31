import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
