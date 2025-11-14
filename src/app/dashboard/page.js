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
              <i className="bi bi-speedometer2"></i>
              <span>Dashboard</span>
            </Link>
            <Link
              className={`nav-item ${activeTab === "properties" ? "active" : ""}`}
              href="/dashboard?tab=properties"
            >
              <i className="bi bi-building"></i>
              <span>Properties</span>
            </Link>
            <Link className="nav-item" href="#">
              <i className="bi bi-clipboard-data"></i>
              <span>Bid Management</span>
            </Link>
            <Link
              className={`nav-item ${activeTab === "bidders" ? "active" : ""}`}
              href="/dashboard?tab=bidders"
            >
              <i className="bi bi-people"></i>
              <span>Bidders</span>
            </Link>
            <Link className="nav-item" href="#">
              <i className="bi bi-eye"></i>
              <span>Visibility Control</span>
            </Link>
            <Link className="nav-item" href="#">
              <i className="bi bi-bell"></i>
              <span>Notifications</span>
            </Link>
            <Link className="nav-item" href="#">
              <i className="bi bi-chat-dots"></i>
              <span>Messaging</span>
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

      <div className="properties-table-section">
        <h3>Property Listings</h3>
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
                    <span className={`status-badge ${property.status.toLowerCase()}`}>
                      {property.status}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons">
                      <button className="action-btn table-action" type="button" aria-label="Edit property">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="action-btn table-action" type="button" aria-label="Delete property">
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
            <Link href="/add-bidder" className="add-property-btn">
              <i className="bi bi-plus-circle"></i>
              <span>Add Bidder</span>
            </Link>
      </div>

      <div className="properties-table-section">
        <h3>Bidders</h3>
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
                    {bidder.linkedProperties}
                  </td>
                  <td data-label="Status">
                    <span className="status-badge active">{bidder.status}</span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-buttons">
                      <button className="action-btn table-action" type="button" aria-label="Edit bidder">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="action-btn table-action" type="button" aria-label="Delete bidder">
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
