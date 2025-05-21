import React, { useState } from "react";
import "../css/pstyles.css";
import "../css/comman.css";
import Sidebar from "./Sidebar";
import flower from "../css/image.png";
import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [formData, setFormData] = useState({ name: "", price: "", quantity: 1, details: "", image: null });
  const [formErrors, setFormErrors] = useState({});
  const [products, setProducts] = useState([]);
  const [showConfirmAdd, setShowConfirmAdd] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [showUpdateConfirm, setShowUpdateConfirm] = useState(false); // triggers the final confirm modal
  const [selectedImage, setSelectedImage] = useState(null); // for image preview in update modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const validateForm = () => {
    const errors = {};
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
      setShowConfirmAdd(true);
    }
  };

  const confirmAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      ...formData,
      imageUrl: URL.createObjectURL(formData.image),
    };
    setProducts((prev) => [newProduct, ...prev]);
    setFormData({ name: "", price: "", quantity: 1, details: "", image: null });
    setFormErrors({});
    setShowConfirmAdd(false);
    toast.success("Product successfully added!");
  };

  const handleUpdate = () => {
    if (!editProduct) return;

    const updatedProduct = {
      ...editProduct,
      imageUrl: selectedImage
        ? URL.createObjectURL(selectedImage)
        : editProduct.imageUrl,
    };

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    toast.success("Product successfully updated!");
  };

  const handleDelete = () => {
    setProducts(products.filter(p => p.id !== showDeleteConfirm));
    setShowDeleteConfirm(null);
    toast.success("Product successfully deleted!");
  };

  return (
    <div className="app-container flex h-screen">
      <Sidebar />
      <div className="main-content flex-1 p-4">
        <ToastContainer />
        <h2 className="dashboard-title mt-4 text-xl font-bold">All <span className="font-light">Product</span></h2>

        <div className="form-product-wrapper mt-2 max-h-[60vh] overflow-auto">
          <div className="top-controls my-4 flex gap-4 items-center justify-between">
            <div className="add-form w-2/3">
              <h3 className="text-lg font-semibold">Add New <span className="text-blue-500">Product</span></h3>
              <form onSubmit={handleSubmit}>
                {/* Form Fields */}
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Product name" />
                <p className="error">{formErrors.name}</p>

                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Product price" />
                <p className="error">{formErrors.price}</p>

                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" />
                <p className="error">{formErrors.quantity}</p>

                <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Product details" />
                <p className="error">{formErrors.details}</p>

                <input type="file" name="image" onChange={handleFileChange} />
                <p className="error">{formErrors.image}</p>

                <button type="submit" disabled={!isEnabled}>Add Product</button>
              </form>
            </div>
          </div>

          <div className="product-list">
            {products.length === 0 ? (
              <div className="empty-message text-blue-600 text-center text-lg font-medium my-8">List of uploaded products will appear here.</div>
            ) : (
              products.map((product) => (
                <div key={product.id} className="product-card">
                  <p className="price">Nu.{product.price}</p>
                  <img src={product.imageUrl || flower} alt="product" className="w-full h-40 object-cover" />
                  <h4 className="name">{product.name}</h4>
                  <p className="description">{product.details}</p>
                  <p className="quantity">Quantity: {product.quantity}</p>
                  <div className="actions">
                    <button onClick={() => setEditProduct(product)}>Update</button>
                    <button onClick={() => setShowDeleteConfirm(product.id)}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add Confirm Modal */}
        {showConfirmAdd && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Are you sure you want to add this product?</p>
              <div className="modal-buttons">
                <button className="yes" onClick={confirmAddProduct}>Yes</button>
                <button className="no" onClick={() => setShowConfirmAdd(false)}>No</button>
              </div>
            </div>
          </div>
        )}
        {editProduct && (
          <div className="modal-overlay">
            <div className="modal-content">
              <FaTimes className="close-icon" onClick={() => setEditProduct(null)} />

              <h2 className="modal-title">
                Update <span className="highlight">Product</span>
              </h2>

              {/* Image Preview */}
              {selectedImage ? (
                <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="preview-img" />
              ) : (
                <img src={editProduct.imageUrl} alt="Current Product" className="preview-img" />
              )}

              {/* Product Name */}
              <label className="field-name">Product Name</label>
              <input
                type="text"
                value={editProduct.name}
                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
              />

              {/* Price */}
              <label className="field-name">Price</label>
              <input
                type="number"
                value={editProduct.price ?? ""}
                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
              />

              {/* Quantity */}
              <label className="field-name">Quantity</label>
              <input
                type="number"
                value={editProduct.quantity}
                onChange={(e) => setEditProduct({ ...editProduct, quantity: e.target.value })}
              />

              {/* Description */}
              <label className="field-name">Description</label>
              <textarea
                value={editProduct.details}
                onChange={(e) => setEditProduct({ ...editProduct, details: e.target.value })}
              />

              {/* File Upload */}
              <div className="file-upload">
                <label>Change Image (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <span>{selectedImage?.name || "flowerplant.png"}</span>
              </div>
 <button
              className="update-btn"
              onClick={() => {
                setShowUpdateConfirm(true); // show confirmation modal
                setShowEditModal(false);    // just hide the modal, keep editProduct intact
              }}
            >
              Update
            </button>
            </div>
          </div>
        )}
        {showEditModal && editProduct && (
          <div className="modal-overlay">
            {/* modal content here */}
            <button
              className="update-btn"
              onClick={() => {
                setShowUpdateConfirm(true); // show confirmation modal
                setShowEditModal(false);    // just hide the modal, keep editProduct intact
              }}
            >
              Update
            </button>
          </div>
        )}


        {/* Confirm Modal */}
        {showUpdateConfirm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Are you sure you want to update this product?</p>
              <div className="modal-buttons">
                <button
                  className="yes"
                  onClick={() => {
                    handleUpdate(); // ✅ update now
                    setShowUpdateConfirm(false);
                    setEditProduct(null);       // ✅ now it's safe to clear
                    setSelectedImage(null);     // ✅ clear image state too
                  }}
                >
                  Yes
                </button>
                <button className="no" onClick={() => setShowUpdateConfirm(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirm Modal */}
        {showDeleteConfirm !== null && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Are you sure you want to delete this product?</p>
              <div className="modal-buttons">
                <button className="yes" onClick={handleDelete}>Yes</button>
                <button className="no" onClick={() => setShowDeleteConfirm(null)}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
