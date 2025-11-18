import Header from "@/components/header/Header";
import LoginContent from "@/components/login/LoginContent";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/../images/footer-logo.svg.png";

export const metadata = {
  title: "Login - Probid Multi Vendor Auctions",
  description: "Secure login to access your auction account",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <LoginContent />

      {/* Dashboard Footer */}
      <footer className="dashboard-footer">
        <div className="dashboard-footer-wrapper">
          <div className="container">
            <div className="dashboard-footer-content">
              <div className="dashboard-footer-column">
                <h3>Category</h3>
                <ul>
                  <li><Link href="/auction-grid">Automotive</Link></li>
                  <li><Link href="/auction-grid">Antiques</Link></li>
                  <li><Link href="/auction-grid">Digital art</Link></li>
                  <li><Link href="/auction-grid">Books &amp; comics</Link></li>
                  <li><Link href="/auction-grid">Gadget</Link></li>
                  <li><Link href="/auction-grid">Electronics</Link></li>
                  <li><Link href="/auction-grid">Coin</Link></li>
                </ul>
              </div>
              <div className="dashboard-footer-column">
                <h3>Company</h3>
                <ul>
                  <li><Link href="/how-to-buy">How to bid with us</Link></li>
                  <li><Link href="/how-to-sell">How to sell with us</Link></li>
                  <li><Link href="/about">About us</Link></li>
                  <li><Link href="/faq">F.A.Q</Link></li>
                  <li><a href="#">Our Brand</a></li>
                </ul>
              </div>
              <div className="dashboard-footer-social">
                <div className="footer-logo-center">
                  <Image
                    src={footerLogo}
                    alt="Bid Bridge logo"
                    width={120}
                    height={120}
                  />
                </div>
                <h3>Social Just You Connected Us!</h3>
                <p>All of update in social</p>
                <div className="social-icons-row">
                  <a href="https://www.linkedin.com/" className="social-icon-item">
                    <i className="bi bi-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.facebook.com/" className="social-icon-item">
                    <i className="bi bi-facebook"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="https://twitter.com/" className="social-icon-item">
                    <i className="bi bi-twitter-x"></i>
                    <span>Twitter</span>
                  </a>
                  <a href="https://www.instagram.com/" className="social-icon-item">
                    <i className="bi bi-instagram"></i>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
              <div className="dashboard-footer-newsletter">
                <h3>Join Our Newsletter &amp; More information.</h3>
                <form className="newsletter-form">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
                <div className="payment-gateways">
                  <h4>Secured Payment Gateways</h4>
                  <div className="payment-cards">
                    <img src="/assets/img/home1/icon/visa.svg" alt="Visa" />
                    <img src="/assets/img/home1/icon/master-card.svg" alt="Mastercard" />
                    <img src="/assets/img/home1/icon/american-express.svg" alt="American Express" />
                    <img src="/assets/img/home1/icon/maestro.svg" alt="Maestro" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-footer-bottom">
              <Link href="/support-center">Support Center</Link>
              <Link href="/terms-condition">Terms &amp; Conditions</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
