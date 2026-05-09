import {Routes, Route } from "react-router-dom"; // Use "react-router" for v7+
import Login from "../pages/Auth/Login";
import AuthLayout from "../layout/AuthLayout";
import Forget from "../pages/Auth/Forget";
// import Number from "../pages/Auth/Number";
import Dashboard from "../Componenets/ui/Dashboard";
import Profile from "../Componenets/ui/Profile";
import Project from "../Componenets/ui/Project";
import Booking from "../Componenets/ui/Booking";
import Payment from "../Componenets/ui/Payment";
import Component from "../Componenets/Component";
import Setting from "../Componenets/ui/Setting";
import Customer from "../Componenets/ui/Customer";
import Employee from "../Componenets/ui/Employee";
import Profile_Customer from "../Componenets/ui/Profile_customer";
import Payment_History from "../Componenets/ui/Payment_history";



const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />}  />
         <Route path="Forget" element={< Forget/>} /> 
      </Route>
        
        <Route path="/component" element={<Component />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="project" element={<Project />} />
          <Route path="booking" element={<Booking />} />
          <Route path="payment" element={<Payment />} />
          <Route path="setting" element={< Setting/>} />
          <Route path="customer" element={< Customer/>} />
          <Route path="Employee" element={<Employee />} />
          <Route path="Profile_Customer" element={<Profile_Customer />} />
          <Route path="payment_history" element={<Payment_History />} />
           {/* Default route for unmatched paths */}
        </Route>

    </Routes>
  )
}

export default AppRoute