"use client";
import React, { useState } from "react";
import Link from "next/link";

const NotificationsContent = () => {
  const [activeTab, setActiveTab] = useState("send");
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    inApp: true,
  });

  const togglePreference = (pref) => {
    setNotificationPreferences((prev) => ({
      ...prev,
      [pref]: !prev[pref],
    }));
  };

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
            <Link href="/bid-management" className="nav-item">
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
            <Link href="/notifications" className="nav-item active">
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
          <div className="notifications-wrapper">
            {/* Tabs */}
            <div className="notifications-tabs">
              <button
                className={`notif-tab ${activeTab === "send" ? "active" : ""}`}
                onClick={() => setActiveTab("send")}
              >
                Send Update
              </button>
              <button
                className={`notif-tab ${activeTab === "view" ? "active" : ""}`}
                onClick={() => setActiveTab("view")}
              >
                View Notifications
              </button>
            </div>

            {/* Send Update Tab Content */}
            {activeTab === "send" && (
              <div className="notifications-card">
                {/* Header */}
                <div className="notif-header">
                  <div className="notif-icon">
                    <i className="bi bi-send"></i>
                  </div>
                  <div>
                    <h2 className="notif-title">Send Update to Bidders</h2>
                    <p className="notif-subtitle">Broadcast notifications to bidders</p>
                  </div>
                </div>

                {/* Form */}
                <form className="notif-form">
                  <div className="form-row-two">
                    <div className="form-group">
                      <label>Recipient Group</label>
                      <input type="text" placeholder="Select recipient group" />
                    </div>

                    <div className="form-group">
                      <label>Notification Type</label>
                      <input type="text" placeholder="Select notification type" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Enter notification subject" />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="6" placeholder="Enter your message here..."></textarea>
                  </div>

                  {/* Notification Preferences */}
                  <div className="notif-preferences">
                    <div className="pref-header">
                      <div className="pref-icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.2177 21.105C10.1089 21.2243 10.037 21.3727 10.0109 21.5321C9.98486 21.6915 10.0057 21.855 10.0708 22.0028C10.136 22.1506 10.2427 22.2763 10.3779 22.3646C10.5132 22.4528 10.6712 22.4999 10.8327 22.5H24.1661C24.3276 22.5001 24.4856 22.4532 24.6209 22.3651C24.7563 22.277 24.8631 22.1515 24.9285 22.0038C24.9938 21.8561 25.0148 21.6926 24.9889 21.5332C24.9631 21.3737 24.8914 21.2253 24.7827 21.1058C23.6744 19.9633 22.4994 18.7492 22.4994 15C22.4994 13.6739 21.9726 12.4021 21.0349 11.4645C20.0972 10.5268 18.8255 10 17.4994 10C16.1733 10 14.9015 10.5268 13.9639 11.4645C13.0262 12.4021 12.4994 13.6739 12.4994 15C12.4994 18.7492 11.3236 19.9633 10.2177 21.105Z" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 26C15.2633 26.456 15.642 26.8347 16.0981 27.098C16.5541 27.3613 17.0714 27.4999 17.598 27.4999C18.1246 27.4999 18.6419 27.3613 19.0979 27.098C19.554 26.8347 19.9327 26.456 20.196 26" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="pref-title">Notification Preferences</h3>
                        <p className="pref-description">Email and In-App</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="notif-actions">
                    <button type="submit" className="btn-send">
                      <i className="bi bi-send"></i>
                      Send Notification
                    </button>
                    <button type="button" className="btn-draft">
                      Save as Draft
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* View Notifications Tab Content */}
            {activeTab === "view" && (
              <div className="notifications-card">
                <p style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                  No notifications to display
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsContent;
