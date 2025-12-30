interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const HeroSection = ({
  heading = "Fast. Reliable. Delivered.",
  description = "Your parcels, documents, and essentials—picked up and delivered with care across Bangladesh.",
}: Hero7Props) => {
  return (
    <section className="2xl:py-20 xl:py-16 lg:py-12 md:py-10 py-8">
      <div className="container text-center mx-auto">
        <div className="2xl:space-y-10 xl:space-y-8 lg:space-y-6 md:space-y-4 space-y-3">
          <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">{heading}</h1>
          <p className="text-muted-foreground text-balance 2xl:text-xl xl:text-lg lg:text-sm text-sm">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
