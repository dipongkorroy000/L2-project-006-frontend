import sliderImage1 from "@/assets/images/bicycle-delivery.jpg";
import {Users, Bike} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-10 md:py-20 max-md:px-5">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row md:items-center gap-10 lg:gap-16 xl:justify-around justify-between">
        <div className="md:space-y-6 space-y-3">
          <h1 className="text-xl lg:text-4xl md:text-2xl font-bold">We Deliver Parcel on Time</h1>
          <p className="text-muted-foreground text-sm md:text-lg">Easy Tracking, fast Payment, and safe Delivery across country.</p>
          <a
            href="/register"
            className="inline-block text-white md:text-lg text-sm lg:px-6 md:px-3 px-2 lg:py-3 md:py-2 py-1 bg-primary rounded-lg font-semibold hover:bg-chart-1 transition"
          >
            Become a Merchant
          </a>
          <div className="mt-6 space-y-2">
            <p className="md:text-xl text-lg flex gap-5 text-muted-foreground items-center">
              <Users size={26} />
              <strong className="text-primary xl:text-2xl md:text-xl text-sm">300k+</strong>Registered Merchant
            </p>
            <p className="md:text-xl text-lg flex gap-5 text-muted-foreground items-center">
              <Bike size={26} /> <strong className="text-primary xl:text-2xl md:text-xl text-sm">5k+</strong> Delivery Man
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-secondary to-secondary rounded-2xl">
            <img src={sliderImage1} alt="Delivery person on bicycle" className="xl:max-w-lg md:max-w-sm max-h-96 mask-y-from-60% mask-b-to-100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
