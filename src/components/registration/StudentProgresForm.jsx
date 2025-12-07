import React, { useEffect, useState } from "react";

const StudentProgresForm = ({ formData, updateField, onNext, onBack }) => {
  // Array of selected subjects
  const [selectedSubjects, setSelectedSubjects] = useState(formData?.subjects || []);

  // Object for ratings: { Math: 4, English: 7 }
  const subjectRatings = formData?.subjectRatings || {};

  useEffect(() => {
    setSelectedSubjects(formData?.subjects || []);
  }, [formData?.subjects]);

  const handleRatingChange = (subject, value) => {
    updateField("subjectRatings", {
      ...subjectRatings,
      [subject]: Number(value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Progress</h1>
      <h6>Please provide details about the student's current academic progress.</h6>

      <div>
        <h2>Your Selected Subjects</h2>

        <div className="subject-list">
          {selectedSubjects.length === 0 ? (
            <p>No subjects selected.</p>
          ) : (
            selectedSubjects.map((subject) => (
              <div key={subject} className="subject-item">
                <label>{subject}</label>

                {/* Dropdown rating */}
                <select
                  value={subjectRatings[subject] || ""}
                  onChange={(e) => handleRatingChange(subject, e.target.value)}
                  className="rating-dropdown"
                >
                  <option value="">Select Rating</option>
                  {[1, 2, 3, 4, 5, 6, 7].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </div>
            ))
          )}
        </div>

        {/* NAVIGATION */}
        <div className="form-nav">
          <button type="button" onClick={onBack} className="btn-secondary">
            Back
          </button>
          <button type="submit" className="btn-primary">
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default StudentProgresForm;
