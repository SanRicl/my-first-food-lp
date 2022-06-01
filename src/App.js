import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Expert from "./components/Expert/Expert";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import "./app.css";


function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="Container">
        <Home />
        <About />
        <Menu />
        <Expert />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
