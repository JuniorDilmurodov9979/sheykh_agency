import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { translations } from '../translations';

interface ContactProps {
  language: 'uz' | 'ru' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = translations[language];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                <p className="text-gray-600">{t.contact.info.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
                <p className="text-gray-600">{t.contact.info.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Location</h3>
                <p className="text-gray-600">{t.contact.info.address}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>{t.contact.form.sending}</span>
              ) : isSuccess ? (
                <span>{t.contact.form.success}</span>
              ) : (
                <>
                  <span>{t.contact.form.send}</span>
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
