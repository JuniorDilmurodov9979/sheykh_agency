import { ExternalLink } from 'lucide-react';
import { translations } from '../translations';

interface WorkProps {
  language: 'uz' | 'ru' | 'en';
}

const Work = ({ language }: WorkProps) => {
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: 'Luxury Fashion Campaign',
      category: 'Social Media Marketing',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Tech Startup Promo',
      category: 'Video Production',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Culinary Experience',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Wellness Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Urban Architecture',
      category: 'Content Creation',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Eco-Friendly Brand',
      category: 'Full Campaign',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="work" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">{t.work.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.work.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gray-300 text-sm mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <button className="inline-flex items-center space-x-2 text-white text-sm font-medium group/btn">
                    <span>{t.work.viewProject}</span>
                    <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
