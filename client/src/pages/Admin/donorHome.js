import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const DonorHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="donor-home-container container">
        <div className="donor-welcome d-flex flex-column mt-4">
          <h1 className="donor-welcome-title">
            Welcome Donor <b className="text-success">{user?.name}</b>
          </h1>
          <h3 className="donor-subtitle">Contribute to Saving Lives</h3>
          <hr />
          <p className="donor-description">
            As a valued donor, you play a critical role in our community by
            contributing your blood to save lives. Your donations help ensure
            that patients in need of blood transfusions have access to this
            lifesaving resource.
          </p>
          <p className="donor-description">
            You can track your donation history, view upcoming blood donation
            drives, and stay informed about the impact of your contributions.
            Your generosity and commitment make a significant difference in the
            lives of many individuals and their families.
          </p>
          <p className="donor-description">
            Please check the upcoming donation events, and feel free to contact
            us if you have any questions or need assistance with the donation
            process. Your continued support is invaluable in maintaining a
            healthy and safe blood supply.
          </p>
        </div>
      </div>
      <style jsx>{`
        
        .donor-home-container {
          background-color: #f5f7fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

      
        .donor-welcome-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
        }

      
        .donor-subtitle {
          font-size: 1.75rem;
          font-weight: 600;
          color: #2980b9;
          margin-bottom: 20px;
        }

    
        .donor-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #34495e;
          margin-bottom: 15px;
        }

        /* Add some padding to the bottom of the container */
        .donor-welcome {
          padding-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default DonorHome;

