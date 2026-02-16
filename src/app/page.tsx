import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Philosophy } from "@/components/home/Philosophy";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Philosophy />
      <Footer />
    </div>
  );
}
