import Hero from "../components/Hero";
import CompanyValues from "./CompanyValues";
import ContactUs from "./Contact";
import DifferenceWithImages from "./Difference";
import VisionMission from "./VisionMission";
import WelcomeMessage from "./WelcomeMessage";

export default function Home() {
    return (
        <>
         <Hero />
    
    <WelcomeMessage/>
    <VisionMission/>
    <CompanyValues/>
    <DifferenceWithImages/>
    <ContactUs/>
      </>
    );
  }