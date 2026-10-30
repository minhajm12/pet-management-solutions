import MainTitle from "../common/MainTitle";
import HomePricingSlider from "./HomePricingSlider";

export default function HomePricingSection() {
  return (
    <section
      className="main-padding flex flex-col y-gap"
      aria-labelledby="spa-packages-heading"
    >
      {/* Section Title & Subtitle */}
      <div className="title-section">
        <MainTitle
          title="All Inclusive Spa Packages"
          description="Save Up To 30% With Our Complete Head-To-Paw Care Bundles Designed For Full Rejuvenation."
          contentClassName="max-w-[620px] text-center mx-auto"
        />
      </div>

      {/* Pricing Slider */}
      <div className="mt-[40px] w-full">
        <HomePricingSlider />
      </div>
    </section>
  );
}

