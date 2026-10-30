import ExploreSalon from "../HomePage/ExploreSalon";
import FeaturesGridSection from "../HomePage/FeaturesGridSection";
import HomeBanner from "../HomePage/HomeBanner";
import HomePricingSection from "../HomePage/HomePricingSection";
import HomeTestimonials from "../HomePage/HomeTestimonials";
import MainCta from "../HomePage/MainCta";
import SalonServices from "../HomePage/SalonServices";

function HomePage() {
    return (
        <>
            {/* HOME BANNER SECTION */}
            <HomeBanner />

            {/* Explore Salon Section */}
            <ExploreSalon />

            {/* Features Grid Section */}
            <FeaturesGridSection />

            {/* Signature Spa & Salon Services Section */}
            <SalonServices />

            {/* Middle CTA SECTION */}
            <MainCta />

            {/* All Inclusive Spa Packages Pricing Section */}
            <HomePricingSection />

            {/* Testimonials Section */}
            <HomeTestimonials />

        </>
    );
}

export default HomePage;
