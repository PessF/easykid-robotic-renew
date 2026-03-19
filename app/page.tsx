// app/page.tsx
import { Navbar } from "./components/layout/navbar/navbar";
import { Hero } from "./components/layout/ui/hero";
import { About } from "./components/layout/ui/about";
import { Courses } from "./components/layout/ui/course";
import { Footer } from "./components/layout/ui/footer";
import { OurTeam } from "./components/layout/ui/team-section/team";
import { Contact } from "./components/layout/ui/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <About />
        <Courses />
        <OurTeam />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
