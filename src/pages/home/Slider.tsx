import sliderImage1 from "@/assets/images/deliveryHero.jpg";
import sliderImage2 from "@/assets/images/statusUpdate.jpg";
import sliderImage3 from "@/assets/images/flexiblePayment.jpg";
import {useEffect, useState} from "react";

const images = [sliderImage1, sliderImage2, sliderImage3];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-xl mx-auto overflow-hidden rounded-lg">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full 2xl:h-80 xl:h-72 lg:h-56 md:h-56 h-48 mx-auto object-cover transition-all duration-700 ease-in-out border-2"
      />
    </div>
  );
};

export default Slider;
