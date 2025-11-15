"use client";
import React, { useState } from "react";
import Link from "next/link";

const AddPropertyContent = () => {
  const [showModal, setShowModal] = useState(true);
  const [visibilitySettings, setVisibilitySettings] = useState({
    minBid: true,
    currentBid: true,
    bidHistory: false,
    propertyStatus: true,
    bidderList: false,
    documents: false,
  });

  const linkedBidders = [
    { name: "John Doe", email: "johndoe@example.com", avatar: "assets/img/bidders/john-doe.png", isImage: true },
    { name: "Jane Smith", email: "janesmith@example.com", avatar: "assets/img/bidders/john-doe.png", isImage: true },
  ];

  const availableBidders = [
    { name: "Michael Brown", email: "michael@example.com", avatar: "assets/img/bidders/john-doe.png", isImage: true },
    { name: "Emily Jones", email: "emilyj@example.com", avatar: "assets/img/bidders/john-doe.png", isImage: true },
    { name: "Robert Davis", email: "robert.d@example.com", avatar: "assets/img/bidders/john-doe.png", isImage: true },
  ];

  const properties = [
    {
      parcelId: "123-456-789",
      address: "123 Main Street",
      city: "Springfield",
      minBid: "$50,000",
      currentBid: "$52,000",
      status: "Active",
    },
    {
      parcelId: "234-567-890",
      address: "456 Oak Avenue",
      city: "Springfield",
      minBid: "$75,000",
      currentBid: "$78,000",
      status: "Active",
    },
    {
      parcelId: "345-678-901",
      address: "789 Pine Road",
      city: "Springfield",
      minBid: "$120,000",
      currentBid: "$125,000",
      status: "Sold",
    },
  ];

  const toggleSetting = (setting) => {
    setVisibilitySettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

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
              <Link href="#" className="nav-item">
                <i className="bi bi-clipboard-data"></i>
                <span>Bid Management</span>
              </Link>
              <Link href="#" className="nav-item">
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
        <div className="dashboard-content" style={{ background: '#FFFFFF' }}>
          <div className="container">
            {/* Search and Add Property Button */}
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
              <button className="add-property-btn" onClick={() => setShowModal(true)}>
                <i className="bi bi-plus-circle"></i> Add Property
              </button>
            </div>
            <div className="dashboard-grid">
              {/* Left Column */}
              <div className="dashboard-main">
                {/* Add New Property Modal */}
                {showModal && (
                  <div className="property-modal">
                    <div className="modal-header">
                      <h3>Add New Property</h3>
                      <button className="close-btn" onClick={() => setShowModal(false)}>
                        <i className="bi bi-x"></i>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Parcel ID</label>
                            <input type="text" placeholder="123-456-789" />
                          </div>
                          <div className="form-group">
                            <label>Property Address</label>
                            <input type="text" placeholder="123 Main Street" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>City</label>
                            <input type="text" placeholder="City Name" />
                          </div>
                          <div className="form-group">
                            <label>ZIP Code</label>
                            <input type="text" placeholder="12345" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Minimum Bid</label>
                            <input type="text" placeholder="$50,000" />
                          </div>
                          <div className="form-group">
                            <label>Property Status</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="form-group full-width">
                          <label>Property Description</label>
                          <textarea placeholder="Enter detailed property description..." rows="4"></textarea>
                        </div>
                        <div className="form-group full-width">
                          <label>Document Attachments</label>
                          <div className="file-upload-area">
                            <div className="upload-icon">
                              <i className="bi bi-upload"></i>
                            </div>
                            <p className="upload-text">Click to upload files</p>
                            <p className="upload-info">PDF, DOC, DOCX, JPG, PNG (Max 10MB each)</p>
                          </div>
                        </div>
                        <div className="form-actions">
                          <button type="submit" className="btn-submit">
                            Add Property
                          </button>
                          <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Additional Property Description */}
                    <div className="modal-section">
                      <h4>Property Description</h4>
                      <textarea placeholder="Enter detailed property description..." rows="4"></textarea>
                    </div>
                  </div>
                )}

                {/* Bidder Visibility Settings */}
                <div className="visibility-settings">
                  <h3>Bidder Visibility Settings</h3>
                  <p className="settings-subtitle">Control what information bidders can see for this property</p>
                  <div className="settings-grid">
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Min Bid</h5>
                        <p>Show minimum bid amount</p>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={visibilitySettings.minBid}
                          onChange={() => toggleSetting("minBid")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Current Bid</h5>
                        <p>Show current highest bid</p>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={visibilitySettings.currentBid}
                          onChange={() => toggleSetting("currentBid")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Bid History</h5>
                        <p>Show all previous bids</p>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={visibilitySettings.bidHistory}
                          onChange={() => toggleSetting("bidHistory")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Property Status</h5>
                        <p>Show property status</p>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={visibilitySettings.propertyStatus}
                          onChange={() => toggleSetting("propertyStatus")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Bidder List</h5>
                        <p>Show list of other bidders</p>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={visibilitySettings.bidderList}
                          onChange={() => toggleSetting("bidderList")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="setting-item">
                      <div className="setting-info">
                        <h5>Documents</h5>
                        <p>Allow document downloads</p>
                      </div>
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={visibilitySettings.documents}
                          onChange={() => toggleSetting("documents")}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* All Properties Table */}
                
              </div>

              {/* Right Sidebar */}
              <div className="dashboard-sidebar">
                {/* Linked Bidders */}
                <div className="sidebar-card">
                  <h4>Linked Bidders</h4>
                  <div className="bidders-list">
                    {linkedBidders.map((bidder, index) => (
                      <div key={index} className="bidder-item">
                        <div className="bidder-avatar">
                          {bidder.isImage ? (
                            <img src={bidder.avatar} alt={bidder.name} />
                          ) : (
                            bidder.avatar
                          )}
                        </div>
                        <div className="bidder-info">
                          <h5>{bidder.name}</h5>
                          <p>{bidder.email}</p>
                        </div>
                        <button className="link-btn linked">
                          <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.6993 18.2121L25.1327 16.7871H25.116C25.8832 15.9921 26.3036 14.9252 26.2848 13.8206C26.2661 12.7159 25.8097 11.6639 25.016 10.8954C24.2385 10.1456 23.2004 9.72656 22.1202 9.72656C21.04 9.72656 20.0019 10.1456 19.2243 10.8954L17.791 12.3204" stroke="#FB2C36" strokeWidth="1.66667"/>
                            <path d="M12.3093 17.7891L10.8843 19.2141C10.1171 20.009 9.6967 21.076 9.71545 22.1806C9.73419 23.2852 10.1905 24.3373 10.9843 25.1057C11.7618 25.8556 12.7999 26.2746 13.8801 26.2746C14.9603 26.2746 15.9984 25.8556 16.7759 25.1057L18.2009 23.6807" stroke="#FB2C36" strokeWidth="1.66667"/>
                            <path d="M14.666 21.3307L21.3327 14.6641" stroke="#FB2C36" strokeWidth="1.66667"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link New Bidder */}
                <div className="sidebar-card">
                  <h4>Link New Bidder</h4>
                  <div className="search-bidder">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search bidders by name or email..." />
                  </div>
                  <div className="bidders-list">
                    {availableBidders.map((bidder, index) => (
                      <div key={index} className="bidder-item">
                        <div className="bidder-avatar">
                          {bidder.isImage ? (
                            <img src={bidder.avatar} alt={bidder.name} />
                          ) : (
                            bidder.avatar
                          )}
                        </div>
                        <div className="bidder-info">
                          <h5>{bidder.name}</h5>
                          <p>{bidder.email}</p>
                        </div>
                        <button className="link-btn available">
                          <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.6993 18.2121L25.1327 16.7871H25.116C25.8832 15.9921 26.3036 14.9252 26.2848 13.8206C26.2661 12.7159 25.8097 11.6639 25.016 10.8954C24.2385 10.1456 23.2004 9.72656 22.1202 9.72656C21.04 9.72656 20.0019 10.1456 19.2243 10.8954L17.791 12.3204" stroke="#6EA500" strokeWidth="1.66667"/>
                            <path d="M12.3093 17.7891L10.8843 19.2141C10.1171 20.009 9.6967 21.076 9.71545 22.1806C9.73419 23.2852 10.1905 24.3373 10.9843 25.1057C11.7618 25.8556 12.7999 26.2746 13.8801 26.2746C14.9603 26.2746 15.9984 25.8556 16.7759 25.1057L18.2009 23.6807" stroke="#6EA500" strokeWidth="1.66667"/>
                            <path d="M14.666 21.3307L21.3327 14.6641" stroke="#6EA500" strokeWidth="1.66667"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="properties-table-section">
                  <h3>All Properties</h3>
                  <div className="table-responsive">
                    <table className="properties-table">
                      <thead>
                        <tr>
                          <th>Parcel ID</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>Min Bid</th>
                          <th>Current Bid</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map((property, index) => (
                          <tr key={index}>
                            <td data-label="Parcel ID">{property.parcelId}</td>
                            <td data-label="Address">{property.address}</td>
                            <td data-label="City">{property.city}</td>
                            <td data-label="Min Bid">{property.minBid}</td>
                            <td data-label="Current Bid">{property.currentBid}</td>
                            <td data-label="Status">
                              <span className={`status-badge ${property.status.toLowerCase()}`}>
                                {property.status}
                              </span>
                            </td>
                            <td data-label="Actions">
                              <div className="action-buttons">
                                <button className="action-btn edit">
                                  <i className="bi bi-pencil"></i>
                                </button>
                                <button className="action-btn delete">
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
      </div>
    </>
  );
};

export default AddPropertyContent;
