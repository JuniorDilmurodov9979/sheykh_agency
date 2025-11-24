import { useTranslations } from "next-intl";
import Image from "next/image";

const DirectorImage = "/images/director_image.png";
const brandFace1 = "/images/brand_face_1.jpeg";
const brandFace2 = "/images/brand_face_2.jpeg";
const laziz2Img = "/images/laziz_2.jpg";
const smm_guy = "/images/Smm_guy.jpg";
const scenario_guy = "/images/scenario_guy.jpg";
const me_pic = "/images/me_pic.png";

const Team = () => {
  const t = useTranslations("team");

  const teamMembers = [
    {
      name: "Lazizbek Suyarov",
      role: "Ijodiy Rahbar",
      image: DirectorImage,
    },
    {
      name: "Quvonchbek Gaybullayev",
      role: "Brend Yuzi",
      image: brandFace1,
    },
    {
      name: "O'gabek (Emir The Model)",
      role: "Model",
      image: brandFace2,
    },
    {
      name: "Sunnatbek Axrorov",
      role: "SMM Mutaxassisi",
      image: smm_guy,
    },
    {
      name: "Sunnatbek Axrorov",
      role: "Ssenariychi",
      image: scenario_guy,
    },
    {
      name: "Lazizbek Suyarov",
      role: "Video Montaj",
      image: laziz2Img,
    },
    {
      name: "Jasur Dilmurodov",
      role: "Frontend Dasturchi",
      image: me_pic,
    },
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-3xl aspect-square">
                <Image
                  width={70}
                  height={50}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
