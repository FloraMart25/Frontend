import React, { useState } from "react";
import { FaSearch, FaEye, FaTrash,FaClipboardList } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "../css/styles.css";

const VendorApplication = () => {
  const applications = [
    { id: 1002, storeName: "Sangay Wangmo", location: "Thimphu", submittedOn: "8/3/2024", license: "100903049" },
    { id: 1002, storeName: "Sangay Wangmo", location: "Paro", submittedOn: "8/3/2024", license: "100903049" },
    { id: 1002, storeName: "Sangay Wangmo", location: "Wangdue", submittedOn: "8/3/2024", license: "100903049" },
    { id: 1002, storeName: "Sangay Wangmo", location: "Pemagatshel", submittedOn: "8/3/2024", license: "100903049" },
    { id: 1002, storeName: "Sangay Wangmo", location: "Thimphu", submittedOn: "8/3/2024", license: "100903049" },
    { id: 1002, storeName: "Sangay Wangmo", location: "Paro", submittedOn: "8/3/2024", license: "100903049" }
  ];

  const [search, setSearch] = useState("");

  const filteredApps = applications.filter(app =>
    app.storeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container flex h-screen">
    <Sidebar />
    <div className="main-content flex-1 p-4">
      <header className="header bg-white shadow p-4 flex justify-between items-center border-b-2 border-black"></header>
      <h2 className="dashboard-title">
        <span className="title-bold">Vendor</span>
        <span className="title-light">Applications</span>
      </h2>
       <div className="table-container">
              <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" className="search-bar" placeholder="Find User" />
      </div>
                <table>
                  <thead>
                    <tr>
                      <th>APPNO</th>
                      <th>Name</th>
                      <th>CID Number</th>
                      <th>Submitted On</th>
                      <th>Licensee</th>
                      <th>Attachment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app.id}>
                        <td>{app.id}</td>
                        <td>{app.storeName}</td>
                        <td>{app.location}</td>
                        <td>{app.submittedOn}</td>
                        <td>{app.license}</td>
                        <td><FaClipboardList className="file-icon" /></td>
                        <td className="action-buttons">
                          <button className="view-btn"><FaEye /> View</button>
                           <button className="action-btn delete-btn">
                              <FaTrash />
                            </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
      </div>
      </div>
  );
};

export default VendorApplication;
