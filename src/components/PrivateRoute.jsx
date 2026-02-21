// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated }) => {
  // যদি লগইন করা থাকে, তাহলে children দেখাও (অ্যাটেনডেন্স পেজ)
  // যদি লগইন না করা থাকে, তাহলে লগইন পেজে পাঠিয়ে দাও
  return isAuthenticated ? children : <Navigate to="/attendance-login" replace />;
};

export default PrivateRoute;