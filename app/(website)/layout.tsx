import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="flex-1">{children}</main>
      </SmoothScroll>
      <Footer />
    </>
  );
}

