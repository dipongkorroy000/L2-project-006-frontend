import HeroSection from "@/pages/home/HeroSection";
import Stats from "./home/Stats";
import Service from "./home/Service";
import Slider from "./home/Slider";
import HowItWorksPage from "./home/HowItWorks";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Slider></Slider>
      <Service></Service>
      <Stats></Stats>
      <HowItWorksPage></HowItWorksPage>
    </>
  );
};

export default Home;
