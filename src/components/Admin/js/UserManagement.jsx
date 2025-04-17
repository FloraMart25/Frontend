import React, { useState } from "react";
import { FaUserEdit, FaTrash, FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import UserEdit from "./UserEdit"; // Import UserEdit component
import "../css/styles.css"



const UserManagement = () => {
  const allUsers = [
    { id: 1, profile: "logo.png", name: "Pema Lhamo", email: "pel@gmail.com", registeredDate: "8/3/2024", regNo: "100903047", role: "Vendor", contact: "17688980" },
    { id: 2, profile: "logo.png", name: "Sonam Zangmo", email: "pel@gmail.com", registeredDate: "8/3/2024", regNo: "100903049", role: "Customer", contact: "17688980" },
    { id: 3, profile: "logo.png", name: "Ugyen Lhamo", email: "pel@gmail.com", registeredDate: "8/3/2024", regNo: "100903049", role: "Vendor", contact: "17688980" },
    { id: 4, profile: "logo.png", name: "Sonam Yangchen", email: "pel@gmail.com", registeredDate: "8/3/2024", regNo: "100903049", role: "Vendor", contact: "17688980" },
    { id: 5, profile: "logo.png", name: "Thinley Dorji", email: "pel@gmail.com", registeredDate: "8/3/2024", regNo: "100903049", role: "Customer", contact: "17688980" },
    { id: 6, profile: "logo.png", name: "Dorji Wangchuk", email: "dw@gmail.com", registeredDate: "8/4/2024", regNo: "100903051", role: "Vendor", contact: "17688981" },
    { id: 7, profile: "logo.png", name: "Tenzin Phuntsho", email: "tp@gmail.com", registeredDate: "8/4/2024", regNo: "100903052", role: "Customer", contact: "17688982" },
    { id: 8, profile: "logo.png", name: "Chimi Lhamo", email: "cl@gmail.com", registeredDate: "8/4/2024", regNo: "100903053", role: "Vendor", contact: "17688983" },
    { id: 9, profile: "logo.png", name: "Karma Wangmo", email: "kw@gmail.com", registeredDate: "8/4/2024", regNo: "100903054", role: "Customer", contact: "17688984" },
    { id: 10, profile: "logo.png", name: "Sonam Lhamo", email: "sl@gmail.com", registeredDate: "8/4/2024", regNo: "100903055", role: "Vendor", contact: "17688985" },
    { id: 11, profile: "logo.png", name: "Tshering Dorji", email: "td@gmail.com", registeredDate: "8/4/2024", regNo: "100903056", role: "Customer", contact: "17688986" },
    { id: 12, profile: "logo.png", name: "Lhamo Zangmo", email: "lz@gmail.com", registeredDate: "8/4/2024", regNo: "100903057", role: "Vendor", contact: "17688987" },
    { id: 13, profile: "logo.png", name: "Pema Yangchen", email: "py@gmail.com", registeredDate: "8/4/2024", regNo: "100903058", role: "Customer", contact: "17688988" },
    { id: 14, profile: "logo.png", name: "Ugyen Wangmo", email: "uw@gmail.com", registeredDate: "8/4/2024", regNo: "100903059", role: "Vendor", contact: "17688989" },

  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredUsers = allUsers.filter(user =>
    (filter === "All" || user.role === filter) &&
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const displayedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);  // Open the Edit User Modal directly
  };

  const handleSaveUser = (updatedUser) => {
    setSelectedUser(updatedUser);
    setIsModalOpen(false);  // Close the Edit User Modal after save
  };

  return (
    <div className="app-container flex h-screen">
      <Sidebar />
      <div className="main-content flex-1 p-4">
        <header className="header bg-white shadow p-4 flex justify-between items-center border-b-2 border-black"></header>
        <h2 className="dashboard-title">
          <span className="title-bold">User</span>
          <span className="title-light">Management</span>
        </h2>
        <div className="table-container1">
          <div className="filter-search-container flex justify-between items-center mb-4">
            <div className="search-container flex items-center">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-bar"
                placeholder="Find User"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="filter-dropdown"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Vendor">Vendor</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Registered Date</th>
                <th>Registered Number</th>
                <th>Role</th>
                <th>Contact No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user) => (
                <tr key={user.id}>
                  <td><img src={user.profile} alt="Profile" className="profile-pic" /></td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.registeredDate}</td>
                  <td>{user.regNo}</td>
                  <td className={user.role === "Vendor" ? "vendor" : "customer"}>{user.role}</td>
                  <td>{user.contact}</td>
                  <td className="actions">
                    <FaUserEdit
                      className="edit-icon"
                      title="Edit"
                      onClick={() => handleEditUser(user)} // Open the Edit User Modal
                    />
                    <FaTrash className="delete-icon" title="Delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;