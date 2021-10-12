// import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Tech from "./Tech";
import Projects from "./Projects";
import "./App.css";
import About from "./About";
import Copyright from "./Copyright";

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
      <Copyright />
    </div>
  );
}

export default App;
