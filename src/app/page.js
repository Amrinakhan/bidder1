import Home1Faq from "@/components/faq/Home1Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ExclusiveContent from "@/components/homepage/ExclusiveContent";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeroSection from "@/components/homepage/HeroSection";
import LogosSection from "@/components/homepage/LogosSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import VideoSection from "@/components/homepage/VideoSection";
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
    title:"Probid- Multi Vendor Auction and Bidding Next js Template."
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <Home1Faq />
      <LogosSection />
      <TestimonialsSection />
      <ExclusiveContent />
      <Footer />
    </>
  );
}
