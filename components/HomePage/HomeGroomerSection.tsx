import MainTitle from "../common/MainTitle";
import GroomerSlider from "./GroomerSlider";

export default function HomeGroomerSection() {
  return (
    <section
      className="main-padding flex flex-col y-gap"
      aria-labelledby="groomers-heading"
    >
      {/* Left-Aligned Section Title & Subtitle */}
      <div className="title-section">
        <MainTitle
          title="Meet Our Certified Pet Stylists"
          description="Trained In Fear-Free Low-Stress Handling, Pet Psychology, And Precision Scissor Artistry."
          alignLeft={true}
          contentClassName="max-w-[700px]"
        />
      </div>

      {/* Groomer Slider */}
      <div className="w-full">
        <GroomerSlider />
      </div>
    </section>
  );
}

