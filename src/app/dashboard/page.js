import Header from "@/components/header/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "@/../images/footer-logo.svg.png";

export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

const propertiesListingData = [
  {
    propertyId: "P001",
    parcelId: "123-456-789",
    address: "123 Main Street",
    minBid: "$50,000",
    status: "Active",
  },
  {
    propertyId: "P002",
    parcelId: "234-567-890",
    address: "456 Oak Avenue",
    minBid: "$75,000",
    status: "Active",
  },
  {
    propertyId: "P003",
    parcelId: "345-678-901",
    address: "789 Pine Road",
    minBid: "$120,000",
    status: "Sold",
  },
  {
    propertyId: "P004",
    parcelId: "456-789-012",
    address: "321 Elm Street",
    minBid: "$95,000",
    status: "Pending",
  },
];

const biddersListingData = [
  {
    bidderId: "BD001",
    name: "John Smith",
    email: "john@email.com",
    phone: "555-0101",
    linkedProperties: "3 properties",
    status: "Active",
  },
  {
    bidderId: "BD002",
    name: "Jane Doe",
    email: "jane@email.com",
    phone: "555-0102",
    linkedProperties: "5 properties",
    status: "Active",
  },
  {
    bidderId: "BD003",
    name: "Bob Johnson",
    email: "bob@email.com",
    phone: "555-0103",
    linkedProperties: "2 properties",
    status: "Active",
  },
];

const DashbaordPage = ({ searchParams }) => {
  const tabParam = searchParams?.tab;
  const activeTab = tabParam === "properties" || tabParam === "bidders" ? tabParam : "overview";

  return (
    <>
      <Header />
      
      {/* Dashboard Navigation */}
      <div className="dashboard-nav">
        <div className="container">
          <nav className="dashboard-menu">
            <Link className={`nav-item ${activeTab === "overview" ? "active" : ""}`} href="/dashboard">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.666 2.5H12.4993C12.0391 2.5 11.666 2.8731 11.666 3.33333V5.83333C11.666 6.29357 12.0391 6.66667 12.4993 6.66667H16.666C17.1263 6.66667 17.4993 6.29357 17.4993 5.83333V3.33333C17.4993 2.8731 17.1263 2.5 16.666 2.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.666 10H12.4993C12.0391 10 11.666 10.3731 11.666 10.8333V16.6667C11.666 17.1269 12.0391 17.5 12.4993 17.5H16.666C17.1263 17.5 17.4993 17.1269 17.4993 16.6667V10.8333C17.4993 10.3731 17.1263 10 16.666 10Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 13.3359H3.33333C2.8731 13.3359 2.5 13.709 2.5 14.1693V16.6693C2.5 17.1295 2.8731 17.5026 3.33333 17.5026H7.5C7.96024 17.5026 8.33333 17.1295 8.33333 16.6693V14.1693C8.33333 13.709 7.96024 13.3359 7.5 13.3359Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link
              className={`nav-item ${activeTab === "properties" ? "active" : ""}`}
              href="/dashboard?tab=properties"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 18.3307V3.33073C5 2.8887 5.17559 2.46478 5.48816 2.15222C5.80072 1.83966 6.22464 1.66406 6.66667 1.66406H13.3333C13.7754 1.66406 14.1993 1.83966 14.5118 2.15222C14.8244 2.46478 15 2.8887 15 3.33073V18.3307H5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.99935 10H3.33268C2.89065 10 2.46673 10.1756 2.15417 10.4882C1.84161 10.8007 1.66602 11.2246 1.66602 11.6667V16.6667C1.66602 17.1087 1.84161 17.5326 2.15417 17.8452C2.46673 18.1577 2.89065 18.3333 3.33268 18.3333H4.99935" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 7.5H16.6667C17.1087 7.5 17.5326 7.6756 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33398 5H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33398 8.33594H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33398 11.6641H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33398 15H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Properties</span>
            </Link>
            <Link className="nav-item" href="/bid-management">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 10.8368L4.68254 17.8201C4.51839 17.9843 4.3235 18.1146 4.109 18.2035C3.89451 18.2924 3.6646 18.3381 3.43242 18.3382C2.9635 18.3382 2.51376 18.152 2.18212 17.8205C1.85049 17.489 1.66414 17.0393 1.66406 16.5704C1.66398 16.1015 1.85019 15.6517 2.18171 15.3201L9.16837 8.33594" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.334 13.3359L18.334 8.33594" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.9167 8.7526L11.25 2.08594" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.66602 6.66406L11.666 1.66406" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.08398 6.25L13.7507 12.9167" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Bid Management</span>
            </Link>
            <Link
              className={`nav-item ${activeTab === "bidders" ? "active" : ""}`}
              href="/dashboard?tab=bidders"
            >
              <i className="bi bi-people"></i>
              <span>Bidders</span>
            </Link>
            <Link className="nav-item" href="/visibility-control">
              <svg width="18" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.833984" y="0.835938" width="16.6675" height="11.6656" stroke="currentColor" strokeWidth="1.66667" strokeLinejoin="round"/>
                <path d="M9.16742 8.12735C10.3181 8.12735 11.2509 7.47449 11.2509 6.66914C11.2509 5.8638 10.3181 5.21094 9.16742 5.21094C8.01677 5.21094 7.08398 5.8638 7.08398 6.66914C7.08398 7.47449 8.01677 8.12735 9.16742 8.12735Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Visibility Control</span>
            </Link>
            <Link className="nav-item" href="/notifications">
              <i className="bi bi-bell"></i>
              <span>Notifications</span>
            </Link>
            <Link className="nav-item" href="/messaging">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3327 14.1667C18.3327 14.6087 18.1571 15.0326 17.8445 15.3452C17.532 15.6577 17.108 15.8333 16.666 15.8333H5.68935C5.24736 15.8334 4.8235 16.0091 4.51102 16.3217L2.67602 18.1567C2.59327 18.2394 2.48785 18.2957 2.37309 18.3186C2.25833 18.3414 2.13938 18.3297 2.03127 18.2849C1.92317 18.2401 1.83077 18.1643 1.76575 18.067C1.70074 17.9697 1.66603 17.8553 1.66602 17.7383V4.16667C1.66602 3.72464 1.84161 3.30072 2.15417 2.98816C2.46673 2.67559 2.89065 2.5 3.33268 2.5H16.666C17.108 2.5 17.532 2.67559 17.8445 2.98816C18.1571 3.30072 18.3327 3.72464 18.3327 4.16667V14.1667Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Messaging</span>
            </Link>
            <Link className="nav-item" href="/reports">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5007 1.66406H5.00065C4.55862 1.66406 4.1347 1.83966 3.82214 2.15222C3.50958 2.46478 3.33398 2.8887 3.33398 3.33073V16.6641C3.33398 17.1061 3.50958 17.53 3.82214 17.8426C4.1347 18.1551 4.55862 18.3307 5.00065 18.3307H15.0007C15.4427 18.3307 15.8666 18.1551 16.1792 17.8426C16.4917 17.53 16.6673 17.1061 16.6673 16.6641V5.83073L12.5007 1.66406Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.666 1.66406V4.9974C11.666 5.43942 11.8416 5.86335 12.1542 6.17591C12.4667 6.48847 12.8907 6.66406 13.3327 6.66406H16.666" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33268 7.5H6.66602" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3327 10.8359H6.66602" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3327 14.1641H6.66602" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Reports</span>
            </Link>
            <Link className="nav-item" href="/subscription">
              <svg width="18" height="16" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.833984" y="0.835938" width="16.6667" height="11.6667" stroke="currentColor" strokeWidth="1.66667" strokeLinejoin="round"/>
                <path d="M2.22266 5.69531H16.1115" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Subscription</span>
            </Link>
            <Link className="nav-item" href="/audit-log">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.666 1.66406V4.9974C11.666 5.43942 11.8416 5.86335 12.1542 6.17591C12.4667 6.48847 12.8907 6.66406 13.3327 6.66406H16.666" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.55732 17.4974C3.70324 17.7501 3.91297 17.9601 4.16554 18.1064C4.4181 18.2526 4.70464 18.33 4.99648 18.3307H15.0007C15.4427 18.3307 15.8666 18.1551 16.1792 17.8426C16.4917 17.53 16.6673 17.1061 16.6673 16.6641V5.83073L12.5007 1.66406H5.00065C4.55862 1.66406 4.1347 1.83966 3.82214 2.15222C3.50958 2.46478 3.33398 2.8887 3.33398 3.33073V5.83073" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 15L6.25 13.75" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.16602 14.1641C5.54673 14.1641 6.66602 13.0448 6.66602 11.6641C6.66602 10.2834 5.54673 9.16406 4.16602 9.16406C2.7853 9.16406 1.66602 10.2834 1.66602 11.6641C1.66602 13.0448 2.7853 14.1641 4.16602 14.1641Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Audit Log</span>
            </Link>
            <Link className="nav-item" href="/profile">
              <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.833984" y="0.835938" width="14.9273" height="16.6368" stroke="currentColor" strokeWidth="1.66667" strokeLinejoin="round"/>
                <path d="M8.29755 11.2373C9.32806 11.2373 10.1635 10.3063 10.1635 9.15772C10.1635 8.00919 9.32806 7.07812 8.29755 7.07812C7.26704 7.07812 6.43164 8.00919 6.43164 9.15772C6.43164 10.3063 7.26704 11.2373 8.29755 11.2373Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Dashboard Content */}
      {activeTab === "properties" ? (
        <PropertiesListingSection />
      ) : activeTab === "bidders" ? (
        <BiddersListingSection />
      ) : (
        <DashboardOverviewSection />
      )}
      
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
};

export default DashbaordPage;

const DashboardOverviewSection = () => (
  <div className="dashboard-content">
    <div className="container">
      {/* User Profile Section */}
      <div className="user-profile-section">
        <div className="user-avatar">
          <img src="/assets/img/dashboard-avatar.png" alt="John Smith" />
        </div>
        <div className="user-info">
          <h1>Hi, John Smith</h1>
          <p>administrator@county.gov</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card stat-card-purple">
          <div className="stat-content">
            <h3>Total Properties</h3>
            <h2>280</h2>
          </div>
          <div className="stat-mask">
            <img src="/assets/img/stat-card-mask.svg" alt="" aria-hidden="true" />
          </div>
        </div>

        <div className="stat-card stat-card-green">
          <div className="stat-content">
            <h3>Active Bidders</h3>
            <h2>50</h2>
          </div>
          <div className="stat-mask">
            <img src="/assets/img/stat-card-mask.svg" alt="" aria-hidden="true" />
          </div>
        </div>

        <div className="stat-card stat-card-red">
          <div className="stat-content">
            <h3>Won Auctions</h3>
            <h2>25</h2>
          </div>
          <div className="stat-mask">
            <img src="/assets/img/stat-card-mask.svg" alt="" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity-section">
        <h2>Recent Activity</h2>
        <div className="activity-table-container">
          <table className="activity-table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Property/Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New property added</td>
                <td>123 Main St</td>
                <td>2 mins ago</td>
              </tr>
              <tr>
                <td>Bid placed</td>
                <td>456 Oak Ave</td>
                <td>15 mins ago</td>
              </tr>
              <tr>
                <td>Auction won</td>
                <td>789 Pine Rd</td>
                <td>1 hour ago</td>
              </tr>
              <tr>
                <td>New bidder registered</td>
                <td>John Smith</td>
                <td>2 hours ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons-section">
        <button className="action-btn action-btn-primary">
          <i className="bi bi-plus"></i>
          <span>Add Property</span>
        </button>
        <button className="action-btn action-btn-secondary">
          <i className="bi bi-person-plus"></i>
          <span>Add Bidder</span>
        </button>
        <button className="action-btn action-btn-secondary">
          <i className="bi bi-bell"></i>
          <span>Send Notice</span>
        </button>
        <button className="action-btn action-btn-secondary">
          <i className="bi bi-download"></i>
          <span>Export Data</span>
        </button>
      </div>

      {/* Notification Banner */}
      <div className="notification-banner">
        <div className="notification-icon">
          <i className="bi bi-exclamation-triangle-fill"></i>
        </div>
        <div className="notification-content">
          <h4>3 Upcoming Auction Deadlines</h4>
          <p>Properties closing in the next 48 hours require your attention</p>
        </div>
        <button className="notification-btn">View All</button>
      </div>
    </div>
  </div>
);

const PropertiesListingSection = () => (
  <div className="dashboard-content">
    <div className="container">
      <div className="property-header">
        <div className="search-filter-area">
          <div className="search-input-wrapper">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search properties..." />
          </div>
          <button className="filter-btn">
            Filter <i className="bi bi-chevron-down"></i>
          </button>
        </div>
        <Link href="/add-property" className="add-property-btn">
          <i className="bi bi-plus-circle"></i>
          <span>Add Property</span>
        </Link>
      </div>

      <div className="properties-table-section" style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '0',
        marginTop: '20px',
        overflow: 'hidden'
      }}>
        <div className="table-responsive">
          <table className="properties-table">
            <thead>
              <tr>
                <th>Property ID</th>
                <th>Parcel ID</th>
                <th>Address</th>
                <th>Min Bid</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {propertiesListingData.map((property) => (
                <tr key={property.propertyId}>
                  <td data-label="Property ID">{property.propertyId}</td>
                  <td data-label="Parcel ID">{property.parcelId}</td>
                  <td data-label="Address">{property.address}</td>
                  <td data-label="Min Bid">{property.minBid}</td>
                  <td data-label="Status">
                    <span
                      className={`status-badge ${property.status.toLowerCase()}`}
                      style={{
                        backgroundColor: property.status.toLowerCase() === 'active' ? '#E9F1D9' : property.status.toLowerCase() === 'pending' ? '#FCF4DA' : '',
                        color: property.status.toLowerCase() === 'active' ? '#6EA500' : property.status.toLowerCase() === 'pending' ? '#D4A017' : ''
                      }}
                    >
                      {property.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons">
                      <button className="action-btn table-action" type="button" aria-label="Edit property" style={{ background: 'transparent', border: 'none' }}>
                        <i className="bi bi-pencil" style={{ color: '#3B82F6' }}></i>
                      </button>
                      <button className="action-btn table-action" type="button" aria-label="Delete property" style={{ background: 'transparent', border: 'none' }}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const BiddersListingSection = () => (
  <div className="dashboard-content">
    <div className="container">
      <div className="property-header">
        <div className="search-filter-area">
          <div className="search-input-wrapper">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search properties..." />
          </div>
          <button className="filter-btn">
            Filter <i className="bi bi-chevron-down"></i>
          </button>
        </div>
        <Link href="/add-bidder" className="add-property-btn">
          <i className="bi bi-plus-circle"></i>
          <span>Add Bidder</span>
        </Link>
      </div>

      <div className="properties-table-section" style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '0',
        marginTop: '20px',
        overflow: 'hidden'
      }}>
        <div className="table-responsive">
          <table className="properties-table">
            <thead>
              <tr>
                <th>Bidder ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Linked Properties</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {biddersListingData.map((bidder) => (
                <tr key={bidder.bidderId}>
                  <td data-label="Bidder ID">{bidder.bidderId}</td>
                  <td data-label="Name">{bidder.name}</td>
                  <td data-label="Email">{bidder.email}</td>
                  <td data-label="Phone">{bidder.phone}</td>
                  <td data-label="Linked Properties" className="linked-properties">
                    <span style={{ color: "#6EA500" }}>{bidder.linkedProperties}</span>
                  </td>
                  <td data-label="Status">
                    <span className="status-badge active" style={{
                      backgroundColor: '#E9F1D9',
                      color: '#6EA500'
                    }}>{bidder.status}</span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons">
                      <button className="action-btn table-action" type="button" aria-label="Edit bidder" style={{ background: 'transparent', border: 'none' }}>
                        <i className="bi bi-pencil" style={{ color: '#3B82F6' }}></i>
                      </button>
                      <button className="action-btn table-action" type="button" aria-label="Delete bidder" style={{ background: 'transparent', border: 'none' }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_221_28067)">
                            <path d="M4.7168 16.2895V3.16176C4.7168 2.77491 4.8672 2.40389 5.13492 2.13035C5.40264 1.85681 5.76575 1.70312 6.14436 1.70312H11.8546C12.2332 1.70312 12.5963 1.85681 12.8641 2.13035C13.1318 2.40389 13.2822 2.77491 13.2822 3.16176V16.2895H4.7168Z" stroke="#6EA500" strokeWidth="1.44301" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <g clipPath="url(#clip1_221_28067)">
                            <path d="M4.34609 9.14844H2.9914C2.63212 9.14844 2.28755 9.29092 2.0335 9.54453C1.77945 9.79814 1.63672 10.1421 1.63672 10.5008V14.5578C1.63672 14.9165 1.77945 15.2605 2.0335 15.5141C2.28755 15.7677 2.63212 15.9102 2.9914 15.9102H4.34609" stroke="#6EA500" strokeWidth="1.35352" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <g clipPath="url(#clip2_221_28067)">
                            <path d="M13.6523 6.9375H15.007C15.3663 6.9375 15.7109 7.08587 15.9649 7.34995C16.219 7.61404 16.3617 7.97223 16.3617 8.3457V14.6826C16.3617 15.0561 16.219 15.4143 15.9649 15.6784C15.7109 15.9425 15.3663 16.0908 15.007 16.0908H13.6523" stroke="#6EA500" strokeWidth="1.38119" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <g clipPath="url(#clip3_221_28067)">
                            <path d="M7.65039 4.5H10.3504" stroke="#6EA500" strokeWidth="1.23238" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <g clipPath="url(#clip4_221_28067)">
                            <path d="M7.65039 7.50781H10.3504" stroke="#6EA500" strokeWidth="1.23878" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <g clipPath="url(#clip5_221_28067)">
                            <path d="M7.65039 10.4922H10.3504" stroke="#6EA500" strokeWidth="1.23878" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <g clipPath="url(#clip6_221_28067)">
                            <path d="M7.65039 13.5H10.3504" stroke="#6EA500" strokeWidth="1.23238" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_221_28067">
                              <rect width="10.4688" height="16.5312" fill="white" transform="translate(3.76562 0.734375)"/>
                            </clipPath>
                            <clipPath id="clip1_221_28067">
                              <rect width="4.51562" height="9.01562" fill="white" transform="translate(0.734375 8.25)"/>
                            </clipPath>
                            <clipPath id="clip2_221_28067">
                              <rect width="4.51562" height="11.2656" fill="white" transform="translate(12.75 6)"/>
                            </clipPath>
                            <clipPath id="clip3_221_28067">
                              <rect width="4.5" height="1.5" fill="white" transform="translate(6.75 3.75)"/>
                            </clipPath>
                            <clipPath id="clip4_221_28067">
                              <rect width="4.5" height="1.51562" fill="white" transform="translate(6.75 6.75)"/>
                            </clipPath>
                            <clipPath id="clip5_221_28067">
                              <rect width="4.5" height="1.51562" fill="white" transform="translate(6.75 9.73438)"/>
                            </clipPath>
                            <clipPath id="clip6_221_28067">
                              <rect width="4.5" height="1.5" fill="white" transform="translate(6.75 12.75)"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
