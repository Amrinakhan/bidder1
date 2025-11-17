"use client";
import React, { useState } from "react";
import Link from "next/link";

const BidderProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const bidderData = {
    id: "BD001",
    name: "John Smith",
    email: "john@email.com",
    phone: "555-0101",
    memberSince: "Jan 15, 2024",
    address: "123 Main St, Springfield, IL 62701",
    status: "Active",
    avatar: "/assets/img/bidders/john-doe.png",
    stats: {
      linkedProperties: 3,
      totalBids: 5,
      winningBids: 2,
      messages: 3,
    },
    recentActivity: [
      {
        type: "bid",
        title: "Placed bid on 123 Main St",
        description: "Bid amount: $245,000",
        time: "2 days ago",
      },
      {
        type: "payment",
        title: "Read payment reminder",
        description: "Payment notification opened",
        time: "3 days ago",
      },
      {
        type: "link",
        title: "Linked to new property",
        description: "789 Pine Road added",
        time: "5 days ago",
      },
    ],
  };

  return (
    <div className="bp-page-wrapper">
      {/* Dashboard Navigation */}
      <div className="dashboard-nav">
        <div className="container">
          <nav className="dashboard-menu">
            <Link href="/dashboard" className="nav-item">
              <i className="bi bi-speedometer2"></i>
              <span>Dashboard</span>
            </Link>
            <Link href="/add-property" className="nav-item">
              <i className="bi bi-building"></i>
              <span>Properties</span>
            </Link>
            <Link href="#" className="nav-item">
              <i className="bi bi-clipboard-data"></i>
              <span>Bid Management</span>
            </Link>
            <Link href="/add-bidder" className="nav-item active">
              <i className="bi bi-people"></i>
              <span>Bidders</span>
            </Link>
            <Link href="#" className="nav-item">
              <i className="bi bi-eye"></i>
              <span>Visibility Control</span>
            </Link>
            <Link href="#" className="nav-item">
              <i className="bi bi-bell"></i>
              <span>Notifications</span>
            </Link>
            <Link href="#" className="nav-item">
              <i className="bi bi-chat-dots"></i>
              <span>Messaging</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="bp-main-content">
        <div className="container">
          {/* Back Button */}
          <Link href="/add-bidder" className="bp-back-link">
            <i className="bi bi-arrow-left"></i>
            Back to Bidders
          </Link>

          {/* Profile Header Card */}
          <div className="bp-profile-card">
            <div className="bp-profile-header">
              <div className="bp-avatar-section">
                <div className="bp-avatar">
                  <img src={bidderData.avatar} alt={bidderData.name} />
                </div>
                <div className="bp-basic-info">
                  <div className="bp-name-status">
                    <h1 className="bp-name">{bidderData.name}</h1>
                    <span className="bp-status-badge active">{bidderData.status}</span>
                  </div>
                  <p className="bp-bidder-id">Bidder ID: {bidderData.id}</p>

                  {/* Contact Info Icons */}
                  <div className="bp-contact-icons">
                    <div className="bp-contact-icon-item">
                      <div className="bp-icon-box email">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="bp-icon-text">
                        <span className="bp-label">Email</span>
                        <span className="bp-value">{bidderData.email}</span>
                      </div>
                    </div>
                    <div className="bp-contact-icon-item">
                      <div className="bp-icon-box phone">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div className="bp-icon-text">
                        <span className="bp-label">Phone</span>
                        <span className="bp-value">{bidderData.phone}</span>
                      </div>
                    </div>
                    <div className="bp-contact-icon-item">
                      <div className="bp-icon-box calendar">
                        <i className="bi bi-calendar"></i>
                      </div>
                      <div className="bp-icon-text">
                        <span className="bp-label">Member Since</span>
                        <span className="bp-value">{bidderData.memberSince}</span>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bp-address">
                    <i className="bi bi-geo-alt"></i>
                    {bidderData.address}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bp-action-buttons">
                <button className="bp-btn primary">
                  <i className="bi bi-chat-dots"></i>
                  Send Message
                </button>
                <button className="bp-btn secondary">
                  <i className="bi bi-pencil"></i>
                  Edit Profile
                </button>
                <button className="bp-btn secondary">
                  <i className="bi bi-building"></i>
                  Manage Properties
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bp-stats-grid">
            <div className="bp-stat-card purple">
              <div className="bp-stat-icon">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_221_28067)">
                    <path d="M4.7168 16.2895V3.16176C4.7168 2.77491 4.8672 2.40389 5.13492 2.13035C5.40264 1.85681 5.76575 1.70312 6.14436 1.70312H11.8546C12.2332 1.70312 12.5963 1.85681 12.8641 2.13035C13.1318 2.40389 13.2822 2.77491 13.2822 3.16176V16.2895H4.7168Z" stroke="white" strokeWidth="1.44301" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <g clipPath="url(#clip1_221_28067)">
                    <path d="M4.34609 9.14844H2.9914C2.63212 9.14844 2.28755 9.29092 2.0335 9.54453C1.77945 9.79814 1.63672 10.1421 1.63672 10.5008V14.5578C1.63672 14.9165 1.77945 15.2605 2.0335 15.5141C2.28755 15.7677 2.63212 15.9102 2.9914 15.9102H4.34609" stroke="white" strokeWidth="1.35352" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <g clipPath="url(#clip2_221_28067)">
                    <path d="M13.6523 6.9375H15.007C15.3663 6.9375 15.7109 7.08587 15.9649 7.34995C16.219 7.61404 16.3617 7.97223 16.3617 8.3457V14.6826C16.3617 15.0561 16.219 15.4143 15.9649 15.6784C15.7109 15.9425 15.3663 16.0908 15.007 16.0908H13.6523" stroke="white" strokeWidth="1.38119" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <g clipPath="url(#clip3_221_28067)">
                    <path d="M7.65039 4.5H10.3504" stroke="white" strokeWidth="1.23238" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <g clipPath="url(#clip4_221_28067)">
                    <path d="M7.65039 7.50781H10.3504" stroke="white" strokeWidth="1.23878" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <g clipPath="url(#clip5_221_28067)">
                    <path d="M7.65039 10.4922H10.3504" stroke="white" strokeWidth="1.23878" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <g clipPath="url(#clip6_221_28067)">
                    <path d="M7.65039 13.5H10.3504" stroke="white" strokeWidth="1.23238" strokeLinecap="round" strokeLinejoin="round"/>
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
              </div>
              <div className="bp-stat-content">
                <div className="bp-stat-number">{bidderData.stats.linkedProperties}</div>
                <div className="bp-stat-label">Linked Properties</div>
              </div>
              <div className="bp-stat-badge">Active</div>
            </div>
            <div className="bp-stat-card green">
              <div className="bp-stat-icon">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5004 9.75075L4.21468 16.0357C4.06694 16.1835 3.89154 16.3008 3.69849 16.3808C3.50545 16.4608 3.29853 16.502 3.08957 16.502C2.66754 16.5021 2.26277 16.3345 1.9643 16.0361C1.66583 15.7378 1.49812 15.333 1.49805 14.911C1.49798 14.489 1.66556 14.0842 1.96393 13.7857L8.25193 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L16.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.125 7.875L10.125 1.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L10.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.375 5.625L12.375 11.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="bp-stat-content">
                <div className="bp-stat-number">{bidderData.stats.totalBids}</div>
                <div className="bp-stat-label">Total Bids</div>
              </div>
              <div className="bp-stat-badge">Total</div>
            </div>
            <div className="bp-stat-card red">
              <div className="bp-stat-icon">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <div className="bp-stat-content">
                <div className="bp-stat-number">{bidderData.stats.winningBids}</div>
                <div className="bp-stat-label">Winning Bids</div>
              </div>
              <div className="bp-stat-badge">Winning</div>
            </div>
            <div className="bp-stat-card orange">
              <div className="bp-stat-icon">
                <i className="bi bi-bell"></i>
              </div>
              <div className="bp-stat-content">
                <div className="bp-stat-number">{bidderData.stats.messages}</div>
                <div className="bp-stat-label">Messages</div>
              </div>
              <div className="bp-stat-badge">Unread</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bp-tabs">
            <button
              className={`bp-tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`bp-tab ${activeTab === "properties" ? "active" : ""}`}
              onClick={() => setActiveTab("properties")}
            >
              Properties & Bids
            </button>
            <button
              className={`bp-tab ${activeTab === "communication" ? "active" : ""}`}
              onClick={() => setActiveTab("communication")}
            >
              Communication Log
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="bp-content-grid">
              {/* Contact Information */}
              <div className="bp-info-card">
                <h3>Contact Information</h3>
                <div className="bp-info-list">
                  <div className="bp-info-item">
                    <div className="bp-info-icon email">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="bp-info-details">
                      <span className="bp-info-label">Email Address</span>
                      <span className="bp-info-value">{bidderData.email}</span>
                    </div>
                  </div>
                  <div className="bp-info-item">
                    <div className="bp-info-icon phone">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="bp-info-details">
                      <span className="bp-info-label">Phone Number</span>
                      <span className="bp-info-value">{bidderData.phone}</span>
                    </div>
                  </div>
                  <div className="bp-info-item">
                    <div className="bp-info-icon location">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="bp-info-details">
                      <span className="bp-info-label">Mailing Address</span>
                      <span className="bp-info-value">{bidderData.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bp-info-card">
                <h3>Recent Activity</h3>
                <div className="bp-activity-list">
                  {bidderData.recentActivity.map((activity, index) => (
                    <div className="bp-activity-item" key={index}>
                      <div className={`bp-activity-dot ${activity.type}`}></div>
                      <div className="bp-activity-content">
                        <h4>{activity.title}</h4>
                        <p>{activity.description}</p>
                        <span className="bp-activity-time">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidderProfile;
