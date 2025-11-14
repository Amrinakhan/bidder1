'use client';

import Image from "next/image";
import Link from 'next/link'
import React from 'react'
import logo from "@/../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="container">
            <div className="footer-menu-wrap simple">
              <div className="row g-lg-4 gy-5 align-items-start">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-logo-area simple">
                    <div className="footer-logo">
                      <Image src={logo} alt="Bid Bridge logo" width={120} height={120} style={{ objectFit: "contain" }} />
                    </div>
                    <div className="social-area">
                      <h5>Social Just You Connected Us!</h5>
                      <p>All of update in social</p>
                      <ul className="social-list">
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bi bi-linkedin" />
                            <span>LinkedIn</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bi bi-facebook" />
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bi bi-twitter-x" />
                            <span>Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bi bi-instagram" />
                            <span>Instagram</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h4>Category</h4>
                    </div>
                    <ul className="widget-list">
                      <li><Link href="/auction-grid">Automotive</Link></li>
                      <li><Link href="/auction-grid">Antiques</Link></li>
                      <li><Link href="/auction-grid">Digital art</Link></li>
                      <li><Link href="/auction-grid">Books &amp; comics</Link></li>
                      <li><Link href="/auction-grid">Gadget</Link></li>
                      <li><Link href="/auction-grid">Electronics</Link></li>
                      <li><Link href="/auction-grid">Coin</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h4>Company</h4>
                    </div>
                    <ul className="widget-list">
                      <li><Link href="/how-to-buy">How to bid with us</Link></li>
                      <li><Link href="/how-to-sell">How to sell with us</Link></li>
                      <li><Link href="/about">About us</Link></li>
                      <li><Link href="/faq">F.A.Q</Link></li>
                      <li><a href="#">Our Brand</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-widget">
                    <div className="widget-title">
                      <h4>Support</h4>
                    </div>
                    <ul className="widget-list">
                      <li><Link href="/support-center">Help &amp; Support</Link></li>
                      <li><Link href="/faq">FAQ Probid</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/terms-condition">Terms of Service</Link></li>
                      <li><Link href="/privacy-policy">Our Policy</Link></li>
                      <li><Link href="/how-to-sell">Sell Support</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="newletter-and-payment-wrap">
                    <div className="newletter-area">
                      <h4>Join Our Newsletter &amp; More information.</h4>
                      <form>
                        <div className="form-inner">
                          <input type="email" placeholder="Email Address" />
                          <button type="submit"><i className="bi bi-arrow-right" /></button>
                        </div>
                      </form>
                    </div>
                    <div className="payment-area">
                      <h6>Secured Payment Gateways</h6>
                      <ul className="payment-options">
                        <li><img src="assets/img/home1/icon/visa.svg" alt="" /></li>
                        <li><img src="assets/img/home1/icon/master-card.svg" alt="" /></li>
                        <li><img src="assets/img/home1/icon/american-express.svg" alt="" /></li>
                        <li><img src="assets/img/home1/icon/maestro.svg" alt="" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
             
              <div className="footer-bottom-right">
                <ul>
                  <li><Link href="/support-center">Support Center</Link></li>
                  <li><Link href="/terms-condition">Terms &amp; Conditions</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Ensure Social Area Title Stays Horizontal */
        :global(.social-area h5) {
          white-space: nowrap;
          display: block;
          width: 100%;
        }

        /* Ensure Social Icons Stay Horizontal */
        :global(.social-area .social-list) {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: flex-start !important;
          flex-wrap: wrap;
          gap: 30px;
        }

        :global(.social-area .social-list li) {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Ensure Footer Bottom Layout */
        :global(.footer-bottom) {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          flex-wrap: wrap;
        }

        :global(.footer-bottom .copyright-area) {
          flex: 0 0 auto;
        }

        :global(.footer-bottom .footer-bottom-right) {
          flex: 0 0 auto;
          margin-left: auto;
        }

        :global(.footer-bottom .footer-bottom-right ul) {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          :global(.social-area h5) {
            white-space: normal;
          }

          :global(.footer-bottom) {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          :global(.footer-bottom .footer-bottom-right) {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Footer
