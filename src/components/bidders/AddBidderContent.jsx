"use client";

import Link from "next/link";
import React, { useState } from "react";

const availableProperties = [
  { id: "PR001", name: "123 Main Street", parcelId: "123-456-789" },
  { id: "PR002", name: "456 Oak Avenue", parcelId: "234-567-890" },
  { id: "PR003", name: "789 Pine Road", parcelId: "345-678-901" },
  { id: "PR004", name: "321 Elm Street", parcelId: "456-789-012" },
];

const bidderTableData = [
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

const AddBidderContent = () => {
  const [linkedProps] = useState([]);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-nav">
        <div className="container">
          <nav className="dashboard-menu">
            <Link href="/dashboard" className="nav-item">
              <i className="bi bi-speedometer2"></i>
              <span>Dashboard</span>
            </Link>
            <Link href="/dashboard?tab=properties" className="nav-item">
              <i className="bi bi-building"></i>
              <span>Properties</span>
            </Link>
            <Link href="#" className="nav-item">
              <i className="bi bi-clipboard-data"></i>
              <span>Bid Management</span>
            </Link>
            <Link href="/dashboard?tab=bidders" className="nav-item active">
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
            <button className="add-property-btn" type="button">
              <i className="bi bi-plus-circle"></i>
              <span>Add Bidder</span>
            </button>
          </div>

          <div className="bidder-management-grid">
            <div className="bidder-form-card">
              <div className="card-header">
                <h3>Add New Bidder</h3>
                <button className="icon-btn" type="button" aria-label="Close form">
                  <i className="bi bi-x"></i>
                </button>
              </div>

              <form className="bidder-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="123 Main Street" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" placeholder="Springfield" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" placeholder="IL" />
                  </div>
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input type="text" placeholder="62701" />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Identity Documents</label>
                  <div className="file-upload-area primary">
                    <div className="upload-icon">
                      <i className="bi bi-upload"></i>
                    </div>
                    <p className="upload-text">Upload ID, Driver’s License, or Passport</p>
                    <p className="upload-info">PDF, DOC, DOCX, JPG, PNG (Max 10MB each)</p>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Additional Notes</label>
                  <textarea placeholder="Enter any additional information about this bidder..." rows="3"></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    Add Bidder
                  </button>
                  <button type="button" className="btn-cancel">
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            <div className="link-properties-card">
              <div className="card-header">
                <h3>Link Properties</h3>
                <p>Select which properties this bidder can access and bid on</p>
              </div>

              <div className="linked-properties-panel">
                <div className="panel-header">
                  <h4>Linked Properties ({linkedProps.length})</h4>
                </div>
                <div className="linked-properties-empty">No properties linked yet.</div>
              </div>

              <div className="available-properties-panel">
                <div className="panel-header">
                  <h4>Available Properties</h4>
                  <div className="search-input-wrapper compact">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search properties..." />
                  </div>
                </div>
                <div className="properties-list">
                  {availableProperties.map((property) => (
                    <div className="property-item" key={property.id}>
                      <div>
                        <h5>{property.name}</h5>
                        <p>{property.parcelId}</p>
                      </div>
                      <button className="icon-btn" type="button" aria-label="Link property">
                        <i className="bi bi-plus-circle"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="properties-table-section bidder-table">
            <h3>All Bidders</h3>
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
                  {bidderTableData.map((bidder) => (
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
    </div>
  );
};

export default AddBidderContent;

