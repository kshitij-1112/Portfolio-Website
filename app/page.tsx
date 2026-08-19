import BackgroundFX from "@/components/BackgroundFX";
import NavDock from "@/components/NavDock";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ResumeViewer from "@/components/ResumeViewer";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <NavDock />
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <Certifications />
        <ResumeViewer />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
