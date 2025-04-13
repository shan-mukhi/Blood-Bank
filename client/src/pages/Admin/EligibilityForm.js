import React, { useState } from "react";
import axios from "axios";

const EligibilityForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    recency: "",
    frequency: "",
    monetary: "",
    time: "",
  });

  const [isFirstTime, setIsFirstTime] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFirstTimeToggle = () => {
    const newStatus = !isFirstTime;
    setIsFirstTime(newStatus);
    if (newStatus) {
      // Autofill and disable
      setFormData({
        recency: 0,
        frequency: 0,
        monetary: 0,
        time: 0,
      });
    } else {
      // Clear fields for manual entry
      setFormData({
        recency: "",
        frequency: "",
        monetary: "",
        time: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are zero (first-time donor)
    if (formData.recency === "0" && formData.frequency === "0" && formData.monetary === "0" && formData.time === "0") {
      setResult("❌ First-time donor detected - Cannot check eligibility");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/predict", formData);
      setResult(res.data.prediction);
    } catch (error) {
      console.error("API Error:", error);
      setResult("Error checking eligibility");
    }
  };

  return (
    <div>
      <h4 className="mb-3">Check Your Blood Donation Eligibility</h4>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="firstTimeCheckbox"
          checked={isFirstTime}
          onChange={handleFirstTimeToggle}
        />
        <label className="form-check-label" htmlFor="firstTimeCheckbox">
          I'm a first-time donor
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label>
            Last Donation (in months): <br />
            <small className="text-muted">Enter 0 if you’ve never donated</small>
          </label>
          <input
            type="number"
            name="recency"
            value={formData.recency}
            onChange={handleChange}
            className="form-control"
            disabled={isFirstTime}
            required
          />
        </div>

        <div className="form-group mb-2">
          <label>
            Total Donations Made: <br />
            <small className="text-muted">Enter 0 if you're a first-time donor</small>
          </label>
          <input
            type="number"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="form-control"
            disabled={isFirstTime}
            required
          />
        </div>

        <div className="form-group mb-2">
          <label>
            Total Blood Donated (in cc): <br />
            <small className="text-muted">Enter 0 if you haven't donated yet</small>
          </label>
          <input
            type="number"
            name="monetary"
            value={formData.monetary}
            onChange={handleChange}
            className="form-control"
            disabled={isFirstTime}
            required
          />
        </div>

        <div className="form-group mb-2">
          <label>
            How long have you been donating? (in months): <br />
            <small className="text-muted">Enter 0 if you're a new donor</small>
          </label>
          <input
            type="number"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-control"
            disabled={isFirstTime}
            required
          />
        </div>

        <button type="submit" className="btn btn-danger mt-3">
          Check Eligibility
        </button>
      </form>

      {result !== null && (
        <div className="alert alert-info mt-3">
          {result === 1
            ? "✅ You are eligible to donate blood!"
            : result === "❌ First-time donor detected - Cannot check eligibility"
            ? result
            : "❌ Sorry, you are not eligible to donate now."}
        </div>
      )}

      <button onClick={closeModal} className="btn btn-secondary mt-2">
        Close
      </button>
    </div>
  );
};

export default EligibilityForm;
