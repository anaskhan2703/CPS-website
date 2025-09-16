import HeroSlider from "../components/HeroSlider";
import ServiceCard from "../components/ServiceCard";
import AboutSection from "./about/page";
import { Home as HomeIcon, Building, Wrench, Contact } from "lucide-react";
import ServicesSection from "./services/page";
import ContactSection from "./contact/page";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
