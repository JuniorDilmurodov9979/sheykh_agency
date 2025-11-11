import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Work from "./components/Work";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurWorks from "./components/OurWorks";

function App() {
  const [language, setLanguage] = useState<"uz" | "ru" | "en">("uz");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />

      <OurWorks language={language} />
      {/* <Work language={language} /> */}
      <Team language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
