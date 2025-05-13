import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Experience from "./Components/Exprerience/Experience";
import Footer from "./Components/Footer/Footer";
import Strength from "./Components/Strength/Strength";

function App() {
  return (
    <div className="font-montserrat bg-slate-900 min-h-screen text-slate-200">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Strength />
      <Footer />
    </div>
  );
}

export default App;
