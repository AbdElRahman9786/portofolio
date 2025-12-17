import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Experience } from "../components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}
