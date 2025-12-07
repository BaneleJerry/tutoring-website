import React, { useState } from "react";

const reachOptions = [
  "Tik Tok",
  "Instagram",
  "Facebook",
  "WhatsApp",
  "Referred by a Luminator",
];

const ReachForm = ({ formData, updateField, onBack, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState(formData.reach || []);
  const [referrer, setReferrer] = useState(formData.referrer || "");
  const [error, setError] = useState("");

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

const handleFormSubmit = (e) => {
  e.preventDefault();

  // Validation
  if (selectedOptions.length === 0) {
    setError("Please select at least one option.");
    return;
  }

  if (
    selectedOptions.includes("Referred by a Luminator") &&
    !referrer.trim()
  ) {
    setError("Please provide the name/code of the Luminator or reply N/A.");
    return;
  }

  setError("");

  // Build final values
  const payload = {
    reach: selectedOptions,
    referrer: selectedOptions.includes("Referred by a Luminator")
      ? referrer
      : "N/A",
  };

  // Send "final" values to parent
  onSubmit(payload);

  
};


  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Help us understand our reach</h1>
      <h6>
        This helps us track and see the most influential part of our
        organization.
      </h6>

      <h3>How did you hear about us? *</h3>
      <div className="checkbox-group">
        {reachOptions.map((option) => (
          <label key={option} className="checkbox-item">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => toggleOption(option)}
            />
            {option}
          </label>
        ))}
      </div>

      {selectedOptions.includes("Referred by a Luminator") && (
        <div className="textfield-group">
          <label>
            If referred by a Luminator, please provide the name/code. (If not
            applicable, reply N/A)
          </label>
          <input
            type="text"
            placeholder="Name/Code or N/A"
            value={referrer}
            onChange={(e) => setReferrer(e.target.value)}
          />
        </div>
      )}

      {error && <p className="error">{error}</p>}

      <div className="form-nav">
        <button type="button" onClick={onBack} className="btn-secondary">
          Back
        </button>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReachForm;
