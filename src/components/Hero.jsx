import { heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  const imagePath = "./src/image/pre-1.jpg";
  
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-cover bg-center min-h-screen"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
      backgroundImage={imagePath}
    >
      <div className="container relative text-center min-h-screen flex flex-col justify-center">
        <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span>Welcome to</span><br />
            <span>Norboo Official Website</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
