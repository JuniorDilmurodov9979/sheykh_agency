import { useTranslations } from "next-intl";
import InstagramReels from "./InstagramReels";

const reels = [
  "https://www.instagram.com/reel/DPEsEuaAl5H/",
  "https://www.instagram.com/reel/DPUMM_wiOou/",
  "https://www.instagram.com/reel/DKW2OKRN3-0/",
  "https://www.instagram.com/reel/DQZKvmCjEKU/",
  "https://www.instagram.com/reel/DPorEqEjAu_/",
  "https://www.instagram.com/reel/DQwKW8Mjcl7/",
];

export default function OurWorks() {
  const t = useTranslations("work");
  return (
    <section id="work" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-2 text-gray-900">{t("title")}</h2>
      <p className="text-gray-500 mb-12 text-lg">{t("subtitle")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center px-4 md:px-10 mb-16">
        {reels.map((url, i) => {
          const embedUrl = url.replace(/\/$/, "") + "/embed/";
          return (
            <div
              key={i}
              className="w-ful w-full h-[500px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 pb-0"
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

      {/* this is a test from the instagram reels embed code but looks similar to the one above */}
      {/* <InstagramReels /> */}
    </section>
  );
}
