import AboutUs from "./about-us/page";
import Carousel from "./_components/Carousel";
import MasonryLayout from "./_components/MasonryLayout";
import Gallery from "./gallery/page";
import Hero from "./_components/Hero";
import PopularItems from "./_components/PopularItems";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Carousel /> */}
      <AboutUs />
      <PopularItems/>
      <Gallery />
    </>
  );
}
