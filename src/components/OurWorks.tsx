import { translations } from "../translations";

const reels = [
  "https://www.instagram.com/reel/DPEsEuaAl5H/",
  "https://www.instagram.com/reel/DPUMM_wiOou/",
  "https://www.instagram.com/reel/DKW2OKRN3-0/",
  "https://www.instagram.com/reel/DQZKvmCjEKU/",
  "https://www.instagram.com/reel/DPorEqEjAu_/",
];
interface OurWorkProps {
  language: "uz" | "ru" | "en";
}
export default function OurWorks({ language }: OurWorkProps) {
  const t = translations[language];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-2 text-gray-900">{t.work.title}</h2>
      <p className="text-gray-500 mb-12 text-lg">{t.work.subtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center px-4 md:px-10 mb-16">
        {reels.map((url, i) => {
          const embedUrl = url.replace(/\/$/, "") + "/embed/";
          return (
            <div
              key={i}
              className="w-full max-w-[400px] h-[420px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full pt-[177.78%]">
                {/* 9:16 aspect ratio for reels */}
                <iframe
                  src={embedUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
