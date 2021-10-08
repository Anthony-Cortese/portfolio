// import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Tech from "./Tech";
import Projects from "./Projects";
import "tailwindcss/tailwind.css";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
      <Projects />
      <Tech />
      <About />
    </div>
  );
}

export default App;
