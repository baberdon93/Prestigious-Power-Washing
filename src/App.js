import "./index.css";
import guy1 from "./Assets/guy1.jpg";
import guy2 from "./Assets/guy2.jpg";
import guy3 from "./Assets/guy3.jpg";
import Testimonials from "./Ui/Testimonials";
import "./index.js";
import Nav from "./Components/Nav.jsx";
import Services from "./Components/Services.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bubbles from "./Ui/Bubbles.jsx";

function App() {
  const images = [
    {
      src: guy1,
      alt: "guy1",
      text: "Dan is an amazing concrete washer, stripper, and resealer!",
    },
    {
      src: guy2,
      alt: "guy2",
      text: "Dan is an amazing concrete washer, stripper, and resealer!",
    },
    {
      src: guy3,
      alt: "guy3",
      text: "Dan is an amazing concrete washer, stripper, and resealer!",
    },
  ];

  return (
    <div className="App">
      <Nav />
      <Bubbles />
      <Services />
      <Testimonials images={images} />
    </div>
  );
}

export default App;
