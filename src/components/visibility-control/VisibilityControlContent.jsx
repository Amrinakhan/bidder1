"use client";
import React, { useState } from "react";
import Link from "next/link";

const VisibilityControlContent = () => {
  const [visibilitySettings, setVisibilitySettings] = useState({
    minimumBid: true,
    winningBid: true,
    propertyStatus: true,
    bidderList: false,
  });

  const toggleSetting = (setting) => {
    setVisibilitySettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
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
            <Link href="/visibility-control" className="nav-item active">
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
          <div className="visibility-control-wrapper">
            <div className="visibility-card">
              <h2 className="visibility-title">Data Visibility Settings</h2>

              <div className="visibility-settings-list">
                <div className="visibility-setting-item">
                  <div className="visibility-setting-info">
                    <h3 className="setting-name">Minimum Bid</h3>
                    <p className="setting-description">Visible to All Bidders</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={visibilitySettings.minimumBid}
                      onChange={() => toggleSetting("minimumBid")}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="visibility-setting-item">
                  <div className="visibility-setting-info">
                    <h3 className="setting-name">Winning Bid</h3>
                    <p className="setting-description">Visible to Winner Only</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={visibilitySettings.winningBid}
                      onChange={() => toggleSetting("winningBid")}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="visibility-setting-item">
                  <div className="visibility-setting-info">
                    <h3 className="setting-name">Property Status</h3>
                    <p className="setting-description">Visible to All Bidders</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={visibilitySettings.propertyStatus}
                      onChange={() => toggleSetting("propertyStatus")}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="visibility-setting-item">
                  <div className="visibility-setting-info">
                    <h3 className="setting-name">Bidder List</h3>
                    <p className="setting-description">Visible to Admin Only</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={visibilitySettings.bidderList}
                      onChange={() => toggleSetting("bidderList")}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisibilityControlContent;
