"use client";
import { useState, FormEvent } from "react";
import { Phone, MapPin, Send, Instagram } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations } from "next-intl";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    telegram: "",
    tel: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations("contact");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    if (
      !formData.email.trim() &&
      !formData.telegram.trim() &&
      !formData.tel.trim()
    ) {
      toast.error(
        "Please fill at least one contact field (Email, Telegram, or Phone)."
      );
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          telegram: "",
          tel: "",
        });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
                <a href="tel:+998887979555">+998 88 797 95 55</a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Location</h3>
                <p className="text-gray-600">{t("info.address")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center transition-transform duration-300">
                <a
                  href="https://t.me/+5AbaGvHY1ztjMWRi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <Send size={26} />
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Telegram</h3>
                <a
                  href="https://t.me/+5AbaGvHY1ztjMWRi"
                  target="_blank"
                  className="text-gray-600"
                >
                  Telegram channel
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center transition-transform duration-300">
                <a
                  href="https://www.instagram.com/sheykh.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <Instagram size={26} />
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/sheykh.agency"
                  target="_blank"
                  className="text-gray-600"
                >
                  sheykh.agency
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder={t("form.name")}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black transition-colors"
            />

            <input
              type="email"
              placeholder={t("form.email")}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black transition-colors"
            />

            <input
              type="text"
              placeholder="Telegram Username"
              value={formData.telegram}
              onChange={(e) =>
                setFormData({ ...formData, telegram: e.target.value })
              }
              className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black transition-colors"
            />

            <input
              type="tel"
              placeholder="Telefon number"
              value={formData.tel}
              onChange={(e) =>
                setFormData({ ...formData, tel: e.target.value })
              }
              className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black transition-colors"
            />

            <textarea
              placeholder={t("form.message")}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={6}
              className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-black transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isSubmitting ? t("form.sending") : t("form.send")}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
