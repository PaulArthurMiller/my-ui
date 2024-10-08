import React from 'react';
import './Sidebar.css'; // Import CSS for styling the sidebar

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <h2>User Information</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="sidebar-graphics">
        {user.avatar && (
          <img src={user.avatar} alt="User Avatar" className="user-avatar" />
        )}
        {/* Placeholder for additional graphics */}
      </div>
    </div>
  );
};

export default Sidebar;

/* Sidebar.css (Suggested styling for Sidebar component)
.sidebar {
  width: 200px;
  padding: 10px;
  border-right: 1px solid #ccc;
  background-color: #f1f1f1;
}

.user-info {
  margin-bottom: 15px;
}

.sidebar-graphics {
  margin-top: 10px;
}

.user-avatar {
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-top: 10px;
}
*/