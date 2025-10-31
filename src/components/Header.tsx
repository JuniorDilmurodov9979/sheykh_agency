import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { translations } from "../translations";

import logo from "../assets/logo_sheykh.jpg";

interface HeaderProps {
  language: "uz" | "ru" | "en";
  setLanguage: (lang: "uz" | "ru" | "en") => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            {/* <span className="text-white font-bold text-lg">S</span> */}

            <img className="rounded-full" src={logo} alt="logo" />
          </div>
          <span
            className={`font-bold text-xl tracking-tight ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Sheykh Agency
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-12">
          <button
            onClick={() => scrollToSection("services")}
            className={`text-sm font-medium transition-colors hover:text-gray-600 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {t.nav.services}
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className={`text-sm font-medium transition-colors hover:text-gray-600 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {t.nav.work}
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className={`text-sm font-medium transition-colors hover:text-gray-600 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {t.nav.team}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors hover:text-gray-600 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {t.nav.contact}
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
            {(["uz", "ru", "en"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs font-medium px-2.5 py-1 rounded-full transition-all ${
                  language === lang
                    ? "bg-black text-white"
                    : isScrolled
                    ? "text-gray-600 hover:text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-lg font-medium text-black hover:text-gray-600 transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-left text-lg font-medium text-black hover:text-gray-600 transition-colors"
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left text-lg font-medium text-black hover:text-gray-600 transition-colors"
            >
              {t.nav.team}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-lg font-medium text-black hover:text-gray-600 transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
