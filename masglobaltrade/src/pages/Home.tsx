import Hero from "../sections/Hero";
import WhyUs from "../sections/WhyUs";
import Pickups from "../sections/Pickups";
import Process from "../sections/Process";
import Stats from "../sections/Stats";
import Approach from "../sections/Approach";
import Zones from "../sections/Zones";
import Reviews from "../sections/Reviews";
import Logos from "../sections/Logos";
import Faq from "../sections/Faq";
import BlogTeaser from "../sections/BlogTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <div id="home-below-fold">
        <Pickups />
        <Process />
        <Stats />
        <Approach />
        <Zones />
        <Reviews />
        <Logos />
        <Faq />
        <BlogTeaser />
      </div>
    </>
  );
}
