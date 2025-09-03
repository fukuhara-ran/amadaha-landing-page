import "./App.css";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import CheckAvailability from "./components/CheckAvailability";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Galleries from "./components/Galleries";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import VillaStudios from "./components/VillaStudios";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="absolute w-full top-[85%] md:top-[93%]">
        <CheckAvailability />
      </div>
      <About />
      <VillaStudios />
      <Facilities />
      <Testimonials />
      <Galleries />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
