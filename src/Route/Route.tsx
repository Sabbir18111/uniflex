import { Routes, Route } from "react-router-dom"; // Use "react-router" for v7+
import Login from "../pages/Auth/Login";
import AuthLayout from "../layout/AuthLayout";
import Forget from "../pages/Auth/Forget";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Project from "../pages/Project";
import Booking from "../pages/Booking";
import Payment from "../pages/Payment";
import Component from "../Componenets/Component";
import Setting from "../pages/Setting";
import Customer from "../pages/Customer";
import Employee from "../pages/Employee";
import Profile_Customer from "../pages/Profile_customer";
import Payment_History from "../pages/Payment_history";
import Commission from "../pages/Commission";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="Forget" element={<Forget />} />
      </Route>

      <Route path="/" element={<Component />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="project" element={<Project />} />
        <Route path="booking" element={<Booking />} />
        <Route path="payment" element={<Payment />} />
        <Route path="setting" element={<Setting />} />
        <Route path="customer" element={<Customer />} />
        <Route path="employee" element={<Employee />} />
        <Route path="profile_customer" element={<Profile_Customer />} />
        <Route path="payment_history" element={<Payment_History />} />
        <Route path="commission" element={<Commission />} />
        {/* Default route for unmatched paths */}
      </Route>
    </Routes>
  );
};

export default AppRoute;
