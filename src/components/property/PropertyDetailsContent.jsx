"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dollarIcon from "@/../images/brands/dolContainer.png";
import gavelIcon from "@/../images/brands/auContainer (1).png";
import rulerIcon from "@/../images/brands/Container (2).png";
import calendarIcon from "@/../images/brands/Container (3).png";
import buildingIcon from "@/../images/brands/Icon.svg";
import peopleIcon from "@/../images/Icon.svg";
import auctionIcon from "@/../images/icons/Auction icon.svg";

const PropertyDetailsContent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const biddingActivity = [
    {
      bidder: "John Doe",
      amount: "$52,000",
      status: "Current High",
      date: "Oct 14, 2024 10:30 AM",
    },
    {
      bidder: "Jane Smith",
      amount: "$51,500",
      status: "Outbid",
      date: "Oct 13, 2024 3:45 PM",
    },
    {
      bidder: "John Doe",
      amount: "$51,000",
      status: "Outbid",
      date: "Oct 12, 2024 2:15 PM",
    },
    {
      bidder: "Michael Brown",
      amount: "$50,500",
      status: "Outbid",
      date: "Oct 11, 2024 9:20 AM",
    },
  ];

  const linkedBidders = [
    {
      id: "80002",
      name: "John Doe",
      email: "johndoe@example.com",
      avatar: "/images/Image (John Doe).png",
    },
    {
      id: "80003",
      name: "Jane Smith",
      email: "janesmith@example.com",
      avatar: "/images/Image (John Doe).png",
    },
  ];

  const [visibilitySettings, setVisibilitySettings] = useState({
    minBid: true,
    currentBid: true,
    bidHistory: false,
    propertyStatus: true,
    bidderList: false,
    documents: true,
  });

  const toggleVisibility = (setting) => {
    setVisibilitySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const getVisibleCount = () => {
    return Object.values(visibilitySettings).filter(Boolean).length;
  };

  const documents = [
    {
      name: "Property_Deed.pdf",
      size: "2.4 MB",
      type: "Deed",
      uploadDate: "Oct 1, 2024",
    },
    {
      name: "Tax_Certificate.pdf",
      size: "1.2 MB",
      type: "Tax Document",
      uploadDate: "Oct 1, 2024",
    },
    {
      name: "Survey_Report.pdf",
      size: "3.8 MB",
      type: "Survey",
      uploadDate: "Oct 2, 2024",
    },
  ];

  return (
    <>
      <div className="dashboard-wrapper">
        {/* Dashboard Navigation */}
        <div className="dashboard-nav">
          <div className="container">
            <nav className="dashboard-menu">
              <Link href="/dashboard" className="nav-item">
                <i className="bi bi-speedometer2"></i>
                <span>Dashboard</span>
              </Link>
              <Link href="/add-property" className="nav-item active">
                <i className="bi bi-building"></i>
                <span>Properties</span>
              </Link>
              <Link href="/bid-management" className="nav-item">
                <i className="bi bi-clipboard-data"></i>
                <span>Bid Management</span>
              </Link>
              <Link href="#" className="nav-item">
                <Image src={peopleIcon} alt="Bidders" width={18} height={18} />
                <span>Bidders</span>
              </Link>
              <Link href="/visibility-control" className="nav-item">
                <i className="bi bi-eye"></i>
                <span>Visibility Control</span>
              </Link>
              <Link href="/notifications" className="nav-item">
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
        <div className="property-details-content">
          <div className="container">
            {/* Back to Properties */}
            <Link href="/add-property" className="back-link">
              <i className="bi bi-arrow-left"></i> Back to Properties
            </Link>

            {/* Property Header */}
            <div className="property-header-card">
              <div className="property-title-section">
                <div className="property-icon">
                  <Image src={buildingIcon} alt="Property" width={32} height={32} />
                </div>
                <div className="property-title-info">
                  <h1>123 Main Street</h1>
                  <p className="property-location">Springfield, IL 62701</p>
                  <p className="property-parcel">Parcel ID: 123-456-789</p>
                </div>
                <span className="status-badge-large active">Active</span>
              </div>

              {/* Stats Cards */}
              <div className="property-stats-grid">
                <div className="stat-card-1">
                  <div className="stat-icon-1">
                    <Image src={dollarIcon} alt="Dollar" width={48} height={48} />
                  </div>
                  <div className="stat-info-1">
                    <p className="stat-label-1">Minimum Bid</p>
                    <p className="stat-value-1">$50,000</p>
                  </div>
                </div>
                <div className="stat-card-1">
                  <div className="stat-icon">
                    <Image src={gavelIcon} alt="Gavel" width={48} height={48} />
                  </div>
                  <div className="stat-info-1">
                    <p className="stat-label-1">Current Bid</p>
                    <p className="stat-value-1">$52,000</p>
                  </div>
                </div>
                <div className="stat-card-1">
                  <div className="stat-icon-1">
                    <Image src={rulerIcon} alt="Ruler" width={48} height={48} />
                  </div>
                  <div className="stat-info-1">
                    <p className="stat-label">Square Feet</p>
                    <p className="stat-value-1">2,400</p>
                  </div>
                </div>
                <div className="stat-card-1">
                  <div className="stat-icon-1">
                    <Image src={calendarIcon} alt="Calendar" width={48} height={48} />
                  </div>
                  <div className="stat-info-1">
                    <p className="stat-label-1">Auction Ends</p>
                    <p className="stat-value-1">Oct</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="property-actions">
                <button className="action-btn-1 primary">
                  <i className="bi bi-pencil-square"></i> Edit Property
                </button>
                <button className="action-btn-1 secondary">
                  <Image src={peopleIcon} alt="People" width={18} height={18} /> Manage Bidders
                </button>
                <button className="action-btn-1 secondary">
                  <i className="bi bi-bell"></i> Send Alert
                </button>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="property-tabs">
              <button
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`tab-btn ${activeTab === "bidders" ? "active" : ""}`}
                onClick={() => setActiveTab("bidders")}
              >
                Linked Bidders
              </button>
              <button
                className={`tab-btn ${activeTab === "visibility" ? "active" : ""}`}
                onClick={() => setActiveTab("visibility")}
              >
                Visibility Control
              </button>
              <button
                className={`tab-btn ${activeTab === "documents" ? "active" : ""}`}
                onClick={() => setActiveTab("documents")}
              >
                Documents
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="property-details-grid">
                {/* Property Details */}
                <div className="details-section">
                  <div className="details-card">
                    <h3>Property Details</h3>
                    <div className="detail-group">
                      <h4>Description</h4>
                      <p>
                        Beautiful residential property with 3 bedrooms, 2 bathrooms.
                        Recently renovated kitchen and hardwood floors throughout.
                      </p>
                    </div>
                    <div className="detail-row">
                      <div className="detail-item">
                        <h4>Lot Size</h4>
                        <p>0.25 acres</p>
                      </div>
                      <div className="detail-item">
                        <h4>Year Built</h4>
                        <p>1985</p>
                      </div>
                    </div>
                    <div className="auction-timeline">
                      <div className="timeline-icon">
                        <i className="bi bi-clock"></i>
                      </div>
                      <div className="timeline-info">
                        <h4>Auction Timeline</h4>
                        <p>Ends: Oct 20, 2024 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Bidding Activity */}
                <div className="bidding-section">
                  <h3>Recent Bidding Activity</h3>
                  <div className="bidding-card">
                    <div className="bidding-list">
                      {biddingActivity.map((bid, index) => (
                        <div key={index} className="bid-item">
                          <div className="bid-left">
                            <div className="bidder-dot"></div>
                            <div className="bid-info">
                              <h5>{bid.bidder}</h5>
                              <p className="bid-amount">{bid.amount}</p>
                              <p className="bid-date">{bid.date}</p>
                            </div>
                          </div>
                          <div className="bid-right">
                            <span className={`bid-status ${bid.status === "Current High" ? "current" : "outbid"}`}>
                              {bid.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "bidders" && (
              <div className="linked-bidders-section">
                <div className="linked-bidders-header">
                  <div className="header-text">
                    <h2>Linked Bidders</h2>
                    <p>Bidders who have access to this property</p>
                  </div>
                  <button className="link-bidder-btn">
                    <i className="bi bi-plus-circle"></i> Link Bidder
                  </button>
                </div>

                <div className="bidders-grid">
                  {linkedBidders.map((bidder, index) => (
                    <div key={index} className="linked-bidder-card">
                      <div className="bidder-details">
                        <div className="bidder-avatar-large">
                          <Image 
                            src={bidder.avatar} 
                            alt={bidder.name} 
                            width={48} 
                            height={48}
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="bidder-info-text">
                          <h3>{bidder.name}</h3>
                          <p className="bidder-email">{bidder.email}</p>
                          <p className="bidder-id">ID {bidder.id}</p>
                        </div>
                      </div>
                      <div className="bidder-actions">
                        <button className="btn-view-profile">View Profile</button>
                        <button className="btn-unlink">Unlink</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "visibility" && (
              <div className="visibility-control-section">
                <div className="visibility-header">
                  <h2>Bidder Visibility Settings</h2>
                  <p>Control what information bidders can see for this property</p>
                </div>

                <div className="visibility-settings-grid">
                  <div className="visibility-item">
                    <div className="visibility-info">
                      <div className="visibility-icon" style={{ color: '#3B82F6' }}>
                        <i className="bi bi-currency-dollar"></i>
                      </div>
                      <div className="visibility-text">
                        <h4>Min Bid</h4>
                        <p>Show minimum bid amount to all bidders</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={visibilitySettings.minBid}
                        onChange={() => toggleVisibility('minBid')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="visibility-item">
                    <div className="visibility-info">
                      <div className="visibility-icon" style={{ color: '#10B981' }}>
                        <Image src={auctionIcon} alt="Auction" width={20} height={20} />
                      </div>
                      <div className="visibility-text">
                        <h4>Current Bid</h4>
                        <p>Show current highest bid to all bidders</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={visibilitySettings.currentBid}
                        onChange={() => toggleVisibility('currentBid')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="visibility-item">
                    <div className="visibility-info">
                      <div className="visibility-icon" style={{ color: '#8B5CF6' }}>
                        <i className="bi bi-clock-history"></i>
                      </div>
                      <div className="visibility-text">
                        <h4>Bid History</h4>
                        <p>Show complete bidding history</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={visibilitySettings.bidHistory}
                        onChange={() => toggleVisibility('bidHistory')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="visibility-item">
                    <div className="visibility-info">
                      <div className="visibility-icon" style={{ color: '#F59E0B' }}>
                        <i className="bi bi-info-circle"></i>
                      </div>
                      <div className="visibility-text">
                        <h4>Property Status</h4>
                        <p>Show property status/state</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={visibilitySettings.propertyStatus}
                        onChange={() => toggleVisibility('propertyStatus')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="visibility-item">
                    <div className="visibility-info">
                      <div className="visibility-icon" style={{ color: '#EC4899' }}>
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="visibility-text">
                        <h4>Bidder List</h4>
                        <p>Show list of other bidders</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={visibilitySettings.bidderList}
                        onChange={() => toggleVisibility('bidderList')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="visibility-item">
                    <div className="visibility-info">
                      <div className="visibility-icon" style={{ color: '#6366F1' }}>
                        <i className="bi bi-file-earmark-text"></i>
                      </div>
                      <div className="visibility-text">
                        <h4>Documents</h4>
                        <p>Allow bidders to download attachments</p>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={visibilitySettings.documents}
                        onChange={() => toggleVisibility('documents')}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="visibility-preview">
                  <span>
                    <i className="bi bi-eye"></i>
                    Visibility Preview
                  </span>
                  <p>Currently visible to bidders: <strong>{getVisibleCount()} of 6 items</strong></p>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="documents-section">
                <div className="documents-header">
                  <h2>Property Documents</h2>
                  <p>Upload and manage property documents (deeds, certificates, surveys, etc.)</p>
                </div>

                <div className="document-upload-area">
                  <div className="upload-icon-circle">
                    <i className="bi bi-download"></i>
                  </div>
                  <h3>Click to upload or drag and drop</h3>
                  <p>PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                </div>

                <div className="documents-list">
                  {documents.map((doc, index) => (
                    <div key={index} className="document-item">
                      <div className="document-icon">
                        <i className="bi bi-file-earmark-pdf"></i>
                      </div>
                      <div className="document-info">
                        <h4>{doc.name}</h4>
                        <p>{doc.size} • {doc.type} • Uploaded: {doc.uploadDate}</p>
                      </div>
                      <div className="document-actions">
                        <button className="doc-action-btn download">
                          <i className="bi bi-download"></i>
                        </button>
                        <button className="doc-action-btn view">
                          <i className="bi bi-eye"></i>
                        </button>
                        <button className="doc-action-btn delete">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailsContent;
