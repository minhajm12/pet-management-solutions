import ExploreSalon from "../HomePage/ExploreSalon";
import FeaturesGridSection from "../HomePage/FeaturesGridSection";
import FooterCta from "../HomePage/FooterCta";
import HomeBanner from "../HomePage/HomeBanner";
import HomeGroomerSection from "../HomePage/HomeGroomerSection";
import HomePricingSection from "../HomePage/HomePricingSection";
import HomeTestimonials from "../HomePage/HomeTestimonials";
import HomeWhyChoose from "../HomePage/HomeWhyChoose";
import MainCta from "../HomePage/MainCta";
import SalonServices from "../HomePage/SalonServices";
import WhyChoosePoints from "../HomePage/WhyChoosePoints";

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

            {/* Meet Our Certified Pet Stylists Section */}
            <HomeGroomerSection />

            {/* Why Choose Us Main Section */}
            <HomeWhyChoose />

            {/* Footer Cta */}
            <FooterCta />

        </>
    );
}

export default HomePage;
