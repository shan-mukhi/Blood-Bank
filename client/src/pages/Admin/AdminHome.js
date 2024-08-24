import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            As an administrator, you have full control over the Blood Bank
            application. Your responsibilities include overseeing blood
            inventory management, monitoring donation records, and ensuring
            that all data is accurate and up-to-date. 

            You can manage different roles within the system, such as donors,
            hospitals, and organizations, ensuring smooth operation and
            coordination among all participants. Use the tools available in the
            application to generate reports, track blood donations, and manage
            requests from hospitals.

            Your work is crucial in maintaining the integrity of the blood
            supply chain and ensuring that lifesaving blood is available to
            those in need. Please use the dashboard features to review
            inventory levels, add new records, and manage user accounts as
            necessary.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
