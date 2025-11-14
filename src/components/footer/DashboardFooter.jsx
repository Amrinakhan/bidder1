'use client';

import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import footerLogo from "@/../images/footer-logo.svg.png";

const DashboardFooter = () => {
  return (
    <>
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
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3>Social Just You Connected Us!</h3>
                <p>All of update in social</p>
                <div className="social-icons-row">
                  <Link href="https://www.linkedin.com/" className="social-icon-item">
                    <i className="bi bi-linkedin"></i>
                    <span>LinkedIn</span>
                  </Link>
                  <Link href="https://www.facebook.com/" className="social-icon-item">
                    <i className="bi bi-facebook"></i>
                    <span>Facebook</span>
                  </Link>
                  <Link href="https://twitter.com/" className="social-icon-item">
                    <i className="bi bi-twitter-x"></i>
                    <span>Twitter</span>
                  </Link>
                  <Link href="https://www.instagram.com/" className="social-icon-item">
                    <i className="bi bi-instagram"></i>
                    <span>Instagram</span>
                  </Link>
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

      <style jsx>{`
        :global(.dashboard-footer) {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 60px 0 20px;
        }

        :global(.dashboard-footer-wrapper) {
          width: 100%;
        }

        :global(.dashboard-footer-content) {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;

        }

        :global(.dashboard-footer-column h3) {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #ffffff;
        }

        :global(.dashboard-footer-column ul) {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        :global(.dashboard-footer-column ul li) {
          margin-bottom: 12px;
        }

        :global(.dashboard-footer-column ul li a) {
          color: #b3b3b3;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        :global(.dashboard-footer-column ul li a:hover) {
          color: #6EA500;
        }

        :global(.dashboard-footer-social) {
          text-align: center;
        }

        :global(.footer-logo-center) {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        :global(.dashboard-footer-social h3) {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #ffffff;
        }

        :global(.dashboard-footer-social p) {
          color: #b3b3b3;
          font-size: 14px;
          margin-bottom: 20px;
        }

        :global(.social-icons-row) {
          display: flex !important;
          flex-direction: row !important;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        :global(.social-icon-item) {
          display: inline-flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center;
          gap: 5px;
          padding: 10px;
          text-decoration: none;
          color: #b3b3b3;
          transition: color 0.3s ease;
        }

        :global(.social-icon-item:hover) {
          color: #6EA500;
        }

        :global(.social-icon-item i) {
          font-size: 26px;
          display: block;
        }

        :global(.social-icon-item span) {
          font-size: 12px;
          display: block;
          text-align: center;
        }

        :global(.dashboard-footer-newsletter h3) {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #ffffff;
        }

        :global(.newsletter-form) {
          display: flex;
          margin-bottom: 30px;
        }

        :global(.newsletter-form input) {
          flex: 1;
          padding: 12px 15px;
          border: 1px solid #333;
          background-color: #2a2a2a;
          color: #ffffff;
          font-size: 14px;
          border-radius: 4px 0 0 4px;
        }

        :global(.newsletter-form input::placeholder) {
          color: #666;
        }

        :global(.newsletter-form button) {
          padding: 12px 20px;

          border: none;
          color: #ffffff;
          cursor: pointer;
          border-radius: 0 4px 4px 0;
          transition: background-color 0.3s ease;
        }

        :global(.newsletter-form button:hover) {
          background-color: #5a8700;
        }

        :global(.newsletter-form button i) {
          font-size: 18px;
        }

        :global(.payment-gateways h4) {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 12px;
          color: #ffffff;
        }

        :global(.payment-cards) {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        :global(.payment-cards img) {
          height: 23px;
          width: auto;
        }

        :global(.dashboard-footer-bottom) {
        float:right;
          border-top: 1px solid #333;
          padding-top: 20px;
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        :global(.dashboard-footer-bottom a) {
          color: #b3b3b3;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        :global(.dashboard-footer-bottom a:hover) {
          color: #6EA500;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          :global(.dashboard-footer-content) {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          :global(.dashboard-footer) {
            padding: 40px 0 20px;
          }

          :global(.dashboard-footer-content) {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          :global(.dashboard-footer-social) {
            text-align: center;
          }

          :global(.social-icons-row) {
            justify-content: center;
          }

          :global(.dashboard-footer-bottom) {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default DashboardFooter;
