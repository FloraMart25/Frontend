import React, { useState } from "react";
import "../css/pstyles.css";
import Sidebar from "./Sidebar";
import flower from "../css/image.png"; 
import { FaSearch, FaToggleOn, FaToggleOff } from "react-icons/fa";

const ProductPage = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: 1,
    details: "",
    image: null,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };
  const handleDecrement = () => {
    if (formData.quantity > 1) {
      setFormData((prevData) => ({
        ...prevData,
        quantity: prevData.quantity - 1,
      }));
    }
  };

  const handleIncrement = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity + 1,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Product name is required";
    if (!formData.price) errors.price = "Product price is required";
    if (!formData.quantity) errors.quantity = "Quantity is required";
    if (!formData.details) errors.details = "Product details are required";
    if (!formData.image) errors.image = "Product image is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="app-container flex h-screen">
      <Sidebar />
      
      <div className="main-content flex-1 p-4">
        <header className="header bg-white shadow p-4 flex justify-between items-center border-b-2 border-black">
          {/* Header content can go here */}
        </header>

        <h2 className="dashboard-title mt-4">
          <span className="title-bold">All</span>
          <span className="title-light">Product</span>
        </h2>
        {/* Search and Filter */}
        <div className="search-filter w-1/3 flex justify-end">
            <div className="search-input relative">
              <input
              icon={<FaSearch className="input-icon" />}
                type="text"
                placeholder="Find User..."
                className="search-bar"
              />
            </div>
          </div>

<div className="product mt-2 max-h-[60vh] overflow-auto">
        <div className="top-controls my-4 flex gap-4 items-center justify-between">
          {/* Add New Product Form */}
          <div className="add-form w-2/3">
            <h3>Add New <span>Product</span></h3>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                />
                {formErrors.name && <p className="error">{formErrors.name}</p>}
              </div>

              <div className="form-field">
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter product price"
                />
                {formErrors.price && <p className="error">{formErrors.price}</p>}
              </div>

              <div className="form-field quantity-field">
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter product quantity"
                  min="1"
                  className="quantity-input"
                />
                {formErrors.quantity && <p className="error">{formErrors.quantity}</p>}
              </div>

              <div className="form-field">
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Enter product details"
                />
                {formErrors.details && <p className="error">{formErrors.details}</p>}
              </div>

              <div className="form-field">
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-field">
                <button type="submit" disabled={!isEnabled}>
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Scrollable Product Cards */}
        <div className="product-list mt-4 max-h-[60vh] overflow-auto">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="product-card mb-4 p-4 border">
              <p>Nu.{i + 1}</p>
              <div className="toggle-container">
                {isEnabled ? (
                  <FaToggleOn className="toggle-icon" onClick={handleToggle} />
                ) : (
                  <FaToggleOff className="toggle-icon" onClick={handleToggle} />
                )}
              </div>
              <img src={flower} alt="flower" className="w-full h-40 object-cover" />
              <h4>Flower {i + 1}</h4>
              <p>A flower's structure description...</p>
              <div className="actions">
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
  );
};

export default ProductPage;
