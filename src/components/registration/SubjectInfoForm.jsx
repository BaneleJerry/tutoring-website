import React from "react";
import { useRequiredCheckboxes } from "../../hooks/useRequiredCheckboxes";

const subjectList = [
  "Mathematics",
  "Physical Sciences",
  "Life Sciences",
  "Accounting",
  "Business Studies",
  "Geography",
];

const goalList = [
  "Improve my grades",
  "Gain confidence",
  "Understand concepts in depth",
  "Other",
];

const SubjectsForm = ({ formData, updateField, onNext, onBack }) => {
  // Use the custom hook instead of useState
  const subjects = useRequiredCheckboxes(formData.subjects || [], "subject");
  const goals = useRequiredCheckboxes(formData.goals || [], "goal");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isSubjectsValid = subjects.validate();
    const isGoalsValid = goals.validate();

    if (!isSubjectsValid || !isGoalsValid) return;

    updateField("subjects", subjects.selected);
    updateField("goals", goals.selected);

    onNext({ subjects: subjects.selected, goals: goals.selected });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Learning preferences</h1>
      <h6>Note: Regardless of the subjects you choose the price does NOT change.</h6>

      {/* SUBJECTS */}
      <h2>Subjects Requiring Tutoring</h2>
      <div className="checkbox-group">
        {subjectList.map((subject) => (
          <label key={subject} className="checkbox-item">
            <input
              type="checkbox"
              checked={subjects.selected.includes(subject)}
              onChange={() => subjects.toggle(subject)}
            />
            <span>{subject}</span>
          </label>
        ))}
      </div>
      {subjects.error && <p className="error">{subjects.error}</p>}

      {/* GOALS */}
      <h3>What are your main goals?</h3>
      <div className="checkbox-group">
        {goalList.map((goal) => (
          <label key={goal} className="checkbox-item">
            <input
              type="checkbox"
              checked={goals.selected.includes(goal)}
              onChange={() => goals.toggle(goal)}
            />
            <span>{goal}</span>
          </label>
        ))}
      </div>
      {goals.error && <p className="error">{goals.error}</p>}

      {/* TextField */}
      <div className="textfield-group">
        <h3>What do you hope to achieve by the end of this tutoring program?</h3>
        <textarea
          name="objectives"
          placeholder="Your objectives..."
          value={formData.objectives || ""}
          onChange={(e) => updateField("objectives", e.target.value)}
        />
      </div>

      {/* NAV */}
      <div className="form-nav">
        <button type="button" onClick={onBack} className="btn-secondary">
          Back
        </button>
        <button type="submit" className="btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default SubjectsForm;
