import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Admin
import Login from "./components/Admin/js/Login.jsx";
import ForgotPassword from "./components/Admin/js/ForgotPassword.jsx";
import EnterOTP from "./components/Admin/js/EnterOTP.jsx";
import ResetPassword from "./components/Admin/js/ResetPassword.jsx";
import AdminDashboard from "./components/Admin/js/AdminDashboard.jsx";
import UserManagement from "./components/Admin/js/UserManagement.jsx";
import VendorApplication from "./components/Admin/js/VendorApplication.jsx";

// Vendor
import VendorDashboard from "./components/Vendor/js/VendorDashboard.jsx";
import OrderPage from "./components/Vendor/js/OrderPage.jsx";
import ProductPage from "./components/Vendor/js/ProductPage.jsx";
import SettingsPage from "./components/Vendor/js/Setting.jsx";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/enter-otp" element={<EnterOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/vendor-application" element={<VendorApplication />} />
          <Route path="/vendordashboard" element={<VendorDashboard />} />
          <Route path="/order-page" element={<OrderPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/setting" element={<SettingsPage />} />

          {/* Admin Routes */}
          {/* <Route
            path="/admindashboard"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/user-management"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <UserManagement />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/vendor-application"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <VendorApplication />
              </ProtectedRoute>
            }
          /> */}

          {/* Vendor Routes */}
          {/* <Route
            path="/vendordashboard"
            element={
              <ProtectedRoute allowedRoles={["Vendor"]}>
                <VendorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-page"
            element={
              <ProtectedRoute allowedRoles={["Vendor"]}>
                <OrderPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute allowedRoles={["Vendor"]}>
                <ProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <ProtectedRoute allowedRoles={["Vendor"]}>
                <SettingsPage />
              </ProtectedRoute>
            }
          /> */}

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
