import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import heroImage1 from "@/../images/home7-banner-img.png.png";
import heroImage2 from "@/../images/home7-banner-img.png (1).png";
import heroImage3 from "@/../images/home7-banner-img.png (2).png";
import heroImage4 from "@/../images/home7-banner-img.png (3).png";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

const HeroSection = () => {
  return (
    <section className="homepage-hero">
      <div className="homepage-hero__background-text">SELL &amp; BUY YOUR</div>
      <div className="container">
        <div className="homepage-hero__grid">
          <div className="homepage-hero__content">
            <p className="homepage-hero__eyebrow">PROBID YOU CAN TRUST</p>
            <h1>
              Select Your{" "}
              <span className={`${playfair.className} hero-emphasis`}>
                Best Bid Property
              </span>{" "}
              At Our Auction.
            </h1>
            <p className="homepage-hero__subtitle">
              Join us as we carve a path to success, driven by passion, powered
              by innovation, and we&apos;re here to turn them into reality.
            </p>
            <div className="homepage-hero__actions">
              <Link className="homepage-hero__btn homepage-hero__btn--primary" href="/auction-grid">
                Start A Bid
              </Link>
              <Link className="homepage-hero__btn homepage-hero__btn--secondary" href="/auction-grid">
                View All Auction
              </Link>
            </div>
          </div>
          <div className="homepage-hero__gallery">
            {heroImages.map((image, idx) => (
              <div key={idx} className={`homepage-hero__image homepage-hero__image--${idx + 1}`}>
                <Image src={image} alt={`Featured property ${idx + 1}`} width={500} height={400} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

