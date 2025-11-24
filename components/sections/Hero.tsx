"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("hero");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (name: string) => {
    const element = document.getElementById(name);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4LTE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-40"></div>

      <div
        className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 transform`}
      >
        <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {t("titleNew")}
          <br />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {/* {t.hero.titleHighlight} */}
          </span>
        </h1>

        <p className="text-lg lg:text-xl  text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t("subtitle")}
          {/* {t.hero.subtitleNew} */}
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="group bg-white cursor-pointer text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          {t("cta")}
        </button>

        <div className="mt-20 animate-bounce">
          <button
            onClick={() => scrollToSection("services")}
            className="flex cursor-pointer flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors mx-auto"
          >
            <span className="text-sm font-medium">{t("scroll")}</span>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
