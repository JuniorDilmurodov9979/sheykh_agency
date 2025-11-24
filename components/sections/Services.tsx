import { Share2, FileText, Film, User, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  const services = [
    { key: "smm" },
    { key: "scenario" },
    { key: "montaj" },
    { key: "brandface" },
    { key: "website" },
    { key: "target" },
  ];

  const icons = [Share2, FileText, Film, User, Globe];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          {/* <p>{t("about")}</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-16">
          {services.map((service, index) => {
            const Icon = icons[index] || Share2;
            return (
              <div
                key={service.key}
                className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-black transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors duration-500">
                    <Icon
                      className="text-white group-hover:text-black transition-colors duration-500"
                      size={28}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-500">
                  {t(`items.${service.key}.name`)}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                  {t(`items.${service.key}.description`)}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
