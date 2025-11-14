import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo1 from "@/../images/brands/company-logo-01.png.png";
import logo2 from "@/../images/brands/company-logo-02.png.png";
import logo3 from "@/../images/brands/company-logo-03.png.png";
import logo4 from "@/../images/brands/company-logo-04.png.png";
import logo6 from "@/../images/brands/company-logo-06.png.png";

const logos = [logo1, logo2, logo3, logo4, logo6];

const LogosSection = () => {
  return (
    <section className="homepage-logos">
      <div className="container">
        <p>We Worked With Global Largest Trusted Brand</p>
        <div className="homepage-logos__marquee">
          <Marquee gradient={false} speed={40}>
            {logos.map((logo, idx) => (
              <div key={idx} className="homepage-logos__item">
                <Image src={logo} alt="Partner logo" width={150} height={80} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;

