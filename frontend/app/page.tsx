import About from "@/components/About";
import Activities from "@/components/Activities";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { fetchProfile } from "@/lib/profile";

export default async function Home() {
  const profile = await fetchProfile();

  return (
    <div id="top">
      <Header name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Activities activities={profile.activities} />
        <Career careers={profile.careers} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </div>
  );
}
