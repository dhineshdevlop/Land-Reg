
import React, { useState } from "react";
import "./LandRegistration.css";

// Demonstration dropdown data
const landData = {
  Erode: {
    Gobichettipalayam: ["Pariyur", "Modachur", "Nanjai Gobi"],
    Bhavani: ["Ammapet", "Kavindapadi"],
    Sathyamangalam: ["Sathyamangalam", "Arasur"]
  },

  Coimbatore: {
    "Coimbatore North": ["Thudiyalur", "Kavundampalayam"],
    Pollachi: ["Anaimalai", "Kinathukadavu"]
  },

  Salem: {
    Salem: ["Omalur", "Yercaud"],
    Attur: ["Thalaivasal", "Gangavalli"]
  }
};

// Demonstration survey numbers
const surveyData = {
  Residential: ["101/1", "102/1", "103/2"],
  Agricultural: ["201/1", "202/2", "203/1"],
  Commercial: ["301/1", "302/1", "303/2"]
};

function LandRegistration() {

  const [district, setDistrict] = useState("");
  const [taluk, setTaluk] = useState("");
  const [village, setVillage] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [surveyNumber, setSurveyNumber] = useState("");

  const [submitted, setSubmitted] = useState(false);

  // District selection
  const handleDistrict = (e) => {
    setDistrict(e.target.value);
    setTaluk("");
    setVillage("");
    setPropertyType("");
    setSurveyNumber("");
    setSubmitted(false);
  };

  // Taluk selection
  const handleTaluk = (e) => {
    setTaluk(e.target.value);
    setVillage("");
    setPropertyType("");
    setSurveyNumber("");
    setSubmitted(false);
  };

  // Village selection
  const handleVillage = (e) => {
    setVillage(e.target.value);
    setPropertyType("");
    setSurveyNumber("");
    setSubmitted(false);
  };

  // Property selection
  const handleProperty = (e) => {
    setPropertyType(e.target.value);
    setSurveyNumber("");
    setSubmitted(false);
  };

  // Survey number selection
  const handleSurvey = (e) => {
    setSurveyNumber(e.target.value);
    setSubmitted(false);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !district ||
      !taluk ||
      !village ||
      !propertyType ||
      !surveyNumber
    ) {
      alert("Please select all five fields.");
      return;
    }

    setSubmitted(true);
  };

  // Reset form
  const handleReset = () => {
    setDistrict("");
    setTaluk("");
    setVillage("");
    setPropertyType("");
    setSurveyNumber("");
    setSubmitted(false);
  };

  return (
    <div className="registration-page">

      <div className="registration-card">

        <div className="form-header">
          <div className="header-icon">🏡</div>

          <h1>Online Land Registration</h1>

          <p>
            Select your land details using the dropdown
            options below.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* 1. District */}
          <div className="form-group">
            <label>1. Select District</label>

            <select
              value={district}
              onChange={handleDistrict}
            >
              <option value="">Choose District</option>

              {Object.keys(landData).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <small>Select your district first.</small>
          </div>

          {/* 2. Taluk */}
          <div className="form-group">
            <label>2. Select Taluk</label>

            <select
              value={taluk}
              onChange={handleTaluk}
              disabled={!district}
            >
              <option value="">Choose Taluk</option>

              {district &&
                Object.keys(landData[district]).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>

            <small>
              {!district
                ? "Select district to unlock this field."
                : "Choose your taluk."}
            </small>
          </div>

          {/* 3. Village */}
          <div className="form-group">
            <label>3. Select Village</label>

            <select
              value={village}
              onChange={handleVillage}
              disabled={!taluk}
            >
              <option value="">Choose Village</option>

              {taluk &&
                landData[district][taluk].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>

            <small>
              {!taluk
                ? "Select taluk to unlock this field."
                : "Choose your village."}
            </small>
          </div>

          {/* 4. Property Type */}
          <div className="form-group">
            <label>4. Select Property Type</label>

            <select
              value={propertyType}
              onChange={handleProperty}
              disabled={!village}
            >
              <option value="">Choose Property Type</option>

              <option value="Residential">Residential</option>
              <option value="Agricultural">Agricultural</option>
              <option value="Commercial">Commercial</option>
            </select>

            <small>
              {!village
                ? "Select village to unlock this field."
                : "Choose your property type."}
            </small>
          </div>

          {/* 5. Survey Number */}
          <div className="form-group">
            <label>5. Select Survey Number</label>

            <select
              value={surveyNumber}
              onChange={handleSurvey}
              disabled={!propertyType}
            >
              <option value="">Choose Survey Number</option>

              {propertyType &&
                surveyData[propertyType].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>

            <small>
              {!propertyType
                ? "Select property type to unlock this field."
                : "Choose your survey number."}
            </small>
          </div>

          {/* Buttons */}
          <div className="button-group">

            <button
              type="submit"
              className="submit-btn"
              disabled={
                !district ||
                !taluk ||
                !village ||
                !propertyType ||
                !surveyNumber
              }
            >
              Submit Application
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>

        {/* Success Message */}
        {submitted && (
          <div className="success-message">

            <h3>✓ Application Details Selected!</h3>

            <p><strong>District:</strong> {district}</p>
            <p><strong>Taluk:</strong> {taluk}</p>
            <p><strong>Village:</strong> {village}</p>
            <p><strong>Property Type:</strong> {propertyType}</p>
            <p><strong>Survey Number:</strong> {surveyNumber}</p>

            <small>
              Demonstration only. No official registration
              or government application has been submitted.
            </small>

          </div>
        )}

        <div className="form-footer">
          Online Land Registration – React.js Demo
        </div>

      </div>

    </div>
  );
}

export default LandRegistration;
