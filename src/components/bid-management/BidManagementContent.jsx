"use client";
import React from "react";
import Link from "next/link";

const BidManagementContent = () => {
  const bidsData = [
    {
      bidId: "B001",
      property: "123 Main Street",
      bidder: "John Smith",
      amount: "$52,000",
      status: "Pending",
      date: "2024-01-15",
    },
    {
      bidId: "B002",
      property: "456 Oak Avenue",
      bidder: "Jane Doe",
      amount: "$78,000",
      status: "Won",
      date: "2024-01-14",
    },
    {
      bidId: "B003",
      property: "789 Pine Road",
      bidder: "Bob Johnson",
      amount: "$125,000",
      status: "Redeemed",
      date: "2024-01-13",
    },
  ];

  return (
    <div className="dashboard-wrapper">
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
            <Link href="/bid-management" className="nav-item active">
              <i className="bi bi-clipboard-data"></i>
              <span>Bid Management</span>
            </Link>
            <Link href="/add-bidder" className="nav-item">
              <i className="bi bi-people"></i>
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
      <div className="dashboard-content" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="bid-management-wrapper">
            <div className="bid-management-table-wrapper">
              <table className="bid-management-table">
                <thead>
                  <tr>
                    <th>Bid ID</th>
                    <th>Property</th>
                    <th>Bidder</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bidsData.map((bid, index) => (
                    <tr key={index}>
                      <td className="bid-id">{bid.bidId}</td>
                      <td>{bid.property}</td>
                      <td>{bid.bidder}</td>
                      <td className="bid-amount">{bid.amount}</td>
                      <td>
                        <span className={`bid-status-badge ${bid.status.toLowerCase()}`}>
                          {bid.status}
                        </span>
                      </td>
                      <td>{bid.date}</td>
                      <td>
                        <button className="bid-update-btn">Update</button>
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

export default BidManagementContent;
