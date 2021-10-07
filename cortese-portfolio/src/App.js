import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Tech from "./Tech";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
      <Tech />
      <Projects />
    </div>
  );
}

export default App;
