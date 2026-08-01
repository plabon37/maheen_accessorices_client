import Hero from "@/components/home/Hero";
import Services from "@/components/services/Services";
import Albums from "@/components/album/Albums";
import About from "@/components/about/About";
import Feature from "@/components/feature/Feature";
import Policy from "@/components/policy/Policy";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Albums />
      <About />
      <Feature />
      <Policy />
    </main>
  );
}