import MainTitle from "../common/MainTitle";
import TestimonialSlider from "./TestimonialSlider";

export default function HomeTestimonials() {
  return (
    <section
      className="flex flex-col y-gap w-full overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Left-Aligned Section Title & Subtitle */}
      <div className="main-padding title-section">
        <MainTitle
          title="Loved By Thousands Of Pet Parents"
          description="Read Stories From Clients Who Trust Us With Their Beloved Furry Family Members."
          contentClassName="max-w-[700px]"
          alignLeft={true}
        />
      </div>

      {/* Testimonials Slider */}
      <div className="mt-[40px] w-full px-4">
        <TestimonialSlider />
      </div>
    </section>
  );
}

