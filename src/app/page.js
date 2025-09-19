import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TechnologiesSection from "@/components/TechnologiesSection/TechnologiesSection";

export const metadata = {
  title: 'Júlia Tavares | Desenvolvedora Web',
  icons: '/assets/img/logo.png'
};

export default function Home() {
  return(
    <>
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection /> 
    </>
  );
};