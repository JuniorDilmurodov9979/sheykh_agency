"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import * as Flags from "country-flag-icons/react/3x2";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  // const [lang, setLang] = useState("uz");

  const t = useTranslations("nav");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const langOptions = [
    { code: "uz", label: "O‘zbek", Flag: Flags.UZ },
    { code: "ru", label: "Русский", Flag: Flags.RU },
    { code: "en", label: "English", Flag: Flags.US },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLanguageChange = (newLocale: string) => {
    setIsLangOpen(false);

    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
    router.refresh();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // console.log("lang", lang);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src={"/icons/logo_sheykh.jpg"}
              width={50}
              height={50}
              alt="logo"
            />
          </div>
          <Link
            href="/"
            className={`font-bold max-sm:text-lg cursor-pointer xl:text-xl  tracking-tight ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Sheykh Agency
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {["services", "work", "team", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm cursor-pointer max-sm:text-base lg:text-lg font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {t(section)}
            </button>
          ))}
        </nav>
        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <Popover open={isLangOpen} onOpenChange={setIsLangOpen}>
            <PopoverTrigger asChild>
              <button
                // onChange={(e) => setLang(e)}
                className={`flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm rounded-full border transition-all ${
                  isScrolled
                    ? "bg-white text-black border-gray-200 shadow-sm"
                    : "bg-white/10 text-white border-white/20 backdrop-blur"
                }`}
              >
                {(() => {
                  const active = langOptions.find((l) => l.code === locale);
                  return active ? (
                    <active.Flag className="max-sm:w-4 max-sm:h-3 w-4 h-4" />
                  ) : null;
                })()}
                {locale.toUpperCase()}
                <ChevronDown size={14} />
              </button>
            </PopoverTrigger>

            <PopoverContent
              align="end"
              className="p-1 w-36 bg-white shadow-lg border rounded-md"
            >
              {langOptions.map(({ code, label, Flag }) => (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition cursor-pointer ${
                    code === locale ? "font-semibold bg-gray-50" : ""
                  }`}
                >
                  <Flag className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </PopoverContent>
          </Popover>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div>
          <div
            className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-lg transition-all duration-300
    ${isScrolled ? "bg-black/90 " : "bg-white/5"}
  `}
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {["services", "work", "team", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-center cursor-pointer text-lg font-medium text-white hover:text-gray-600 transition-colors"
                >
                  {t(section)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
