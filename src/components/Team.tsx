import { translations } from '../translations';

interface TeamProps {
  language: 'uz' | 'ru' | 'en';
}

const Team = ({ language }: TeamProps) => {
  const t = translations[language];

  const teamMembers = [
    {
      name: 'Amir Sheykh',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dilnoza Karimova',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Rustam Aliyev',
      role: 'Video Producer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Malika Nazarova',
      role: 'SMM Strategist',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">{t.team.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.team.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
