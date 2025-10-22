import { translations } from '../translations';

interface FooterProps {
  language: 'uz' | 'ru' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-2xl tracking-tight">Sheykh Agency</span>
          </div>

          <p className="text-gray-400 max-w-md">{t.footer.tagline}</p>

          <div className="pt-8 border-t border-gray-800 w-full">
            <p className="text-gray-500 text-sm">
              © {currentYear} Sheykh Agency. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
