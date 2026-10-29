import ExploreSalon from "../HomePage/ExploreSalon";
import FeaturesGridSection from "../HomePage/FeaturesGridSection";
import HomeBanner from "../HomePage/HomeBanner";
import SalonServices from "../HomePage/SalonServices";

function HomePage() {
    return (
        <>
            {/* HOME BANNER SECTION */}
            <HomeBanner />

            {/* Explore Salon Section */}
            <ExploreSalon />

            {/* Signature Spa & Salon Services Section */}
            <SalonServices />

            {/* Features Grid Section */}
            <FeaturesGridSection />
        </>
    );
}

export default HomePage;
