import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import { Scoreboard } from "@/components/Scoreboard";

export default function Home() {
  return (
    <div className="w-[100%] h-[100svh]">
      <Navbar />
      <Hero />
      <About />
      <Scoreboard />
      <Footer />
    </div>
  );
}
