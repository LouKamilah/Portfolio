import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Habilidades } from "./components/habilidades";
import { Mejorando } from "./components/mejorando";
import { Social } from "./components/social";
import { Proyectos } from "./components/proyectos";
import { Contacto } from "./components/contacto";
import { Footer } from "./components/footer";
import { PdfDownloadButton } from "./components/pdfDownloadButton";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg mask-image pointer-events-none"></div>
      <Navbar></Navbar>
      <Hero></Hero>
      <PdfDownloadButton></PdfDownloadButton>
      <Habilidades></Habilidades>
      <Mejorando></Mejorando>
      <Proyectos></Proyectos>
      <Social></Social>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  );
}

export default App;
