import NewsLetterSection from "../common/NewsLetterSection";
import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <footer className="main-padding pt-5 lg:pt-5 xl:pt-14 pb-8 sm:pb-12 bg-[#f7f7f7] flex flex-col gap-10 sm:gap-14">
      {/* Newsletter Subscription Card */}
      <NewsLetterSection />

      {/* Main Footer Links, Contact & Copyright */}
      <FooterContent />
    </footer>
  );
}

