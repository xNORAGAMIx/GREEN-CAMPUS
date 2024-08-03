import ShopText from "../components/ShopText";

import Image from "./ShopImage.jsx";
import Status from "./Status.jsx";

import Image1 from "../assets/image.jpeg";
import Image2 from "../assets/image1.jpeg";
import Image3 from "../assets/image2.jpeg";
import Image4 from "../assets/image3.jpg";

import TextAnimation from "./TextAnimation.jsx";

const HeroSection = () => {
  return (
    <>
      <ShopText />
      <div id="event" className="mt-20 flex justify-between items-center gap-16 p-8 flex-col lg:flex-row">
        <Image
          src={Image1}
          alt="image"
          caption="New Eco-Friendly Store Opens!"
          date="July 25,2024"
          about="Check out the latest addition to our community! EcoGoods offers sustainable products that won't break the bank. Shop local, save the planet!"
        />

        <Image
          src={Image2}
          alt="image"
          caption="Join Our Next Clean-Up Day!"
          date="July 25,2024"
          about="Get your hands dirty for a good cause! Join us on August 5th for a community clean-up. Bring your friends and family!"
        />

        <Image
          src={Image3}
          alt="image"
          caption="Volunteer Opportunities Available Now!"
          date="July 25,2024"
          about="Looking to make a difference? Check out our volunteer page for exciting opportunities to help your community thrive!"
        />

        <Image
          src={Image4}
          alt="image"
          caption="Community Forum Launches Next Week!"
          date="July 25,2024"
          about="Join the conversation! Our community forum goes live next week. Share ideas, ask questions, and connect with fellow eco-warriors! "
        />
      </div>

      <div className="mt-20 mb-20 py-20 px-20 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-12">
        <Status text="Active Members" num="1,000+" />
        <Status text="Events Hosted" num="500+" />
        <Status text="Resources Available" num="300+" />
      </div>

      <TextAnimation/>
    </>
  );
};

export default HeroSection;
