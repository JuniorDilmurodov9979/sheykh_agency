import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import OurWorks from "@/components/sections/OurWorks";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OurWorks />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
