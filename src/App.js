import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import ParticlesConfig from "./particles/Config";
import AboutMe from "./components/AboutMe";
import { Services } from "./components/Services";
function App() {
  return (
    <div className="App">
      <Particles
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
        }}
        className="par"
        params={ParticlesConfig}
      />

      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;

/* 
{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }
        */
