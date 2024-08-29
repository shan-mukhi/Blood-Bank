import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import FrontPage from "./pages/frontPage";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";
import Contact from "./pages/contactus";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import AboutUs from "./pages/AboutUs";
import VolunteerForm from "./pages/Volunteer";
import Email from "./pages/email";
import Header from "./components/shared/Layout/Header";
import DonorHome from "./pages/Admin/donorHome";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
    
        <Route
          path="/volunteer"
          element={
            <ProtectedRoute>
              <Header/>
              <VolunteerForm />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/email"
          element={<Email />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donorhome"
          element={
            <ProtectedRoute>
              <DonorHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
           element={
          <>
            <Header/>
              <FrontPage />
              </>
            
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orgnaisation"
          element={
            <ProtectedRoute>
              <OrganisationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
    
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
       
        <Route
          path="/aboutus"
          element={
            <>
              <Header/>
              <AboutUs />
              </>
           
          }
        />
        <Route
         path="/contactus"
          element={
            <>
              <Header />
              <Contact />
              </>
           
          }
      />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
