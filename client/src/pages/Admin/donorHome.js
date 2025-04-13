import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import EligibilityForm from "./EligibilityForm.js";

const DonorHome = () => {
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <div className="donor-home-container container">
        <div className="donor-welcome d-flex flex-column mt-4">
          <h1 className="donor-welcome-title">
            Welcome Donor <b className="text-success">{user?.name}</b>
          </h1>
          <h3 className="donor-subtitle">Contribute to Saving Lives</h3>
          <hr />
          <button className="btn btn-danger my-3" onClick={() => setShowModal(true)}>
            Check Eligibility
          </button>
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <EligibilityForm closeModal={() => setShowModal(false)} />
          </div>
        </div>
      )}

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

        .donor-welcome {
          padding-bottom: 20px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-box {
          background: white;
          padding: 30px;
          border-radius: 12px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </Layout>
  );
};

export default DonorHome;
