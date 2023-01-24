// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Body/LandingPage";
import DisplayProperties from "./components/Body/DisplayProperties";
import About from "./components/Body/About";
import Contact from "./components/Body/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <DisplayProperties />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
