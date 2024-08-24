import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const DonorHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Donor <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Contribute to Saving Lives</h3>
          <hr />
          <p>
            As a valued donor, you play a critical role in our community by 
            contributing your blood to save lives. Your donations help ensure 
            that patients in need of blood transfusions have access to this 
            lifesaving resource. 

            You can track your donation history, view upcoming blood donation 
            drives, and stay informed about the impact of your contributions. 
            Your generosity and commitment make a significant difference in the 
            lives of many individuals and their families.

            Please check the upcoming donation events, and feel free to contact 
            us if you have any questions or need assistance with the donation 
            process. Your continued support is invaluable in maintaining a healthy 
            and safe blood supply.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DonorHome;
