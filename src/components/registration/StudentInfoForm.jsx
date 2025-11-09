import React, { useState } from "react";
import "./registrationForm.css"

const StudentInfoForm = ({ onNext }) => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    grade: "",
    studentPhone: "",
    studentEmail: "",
    guardianName: "",
    guardianPhone: "",
    guardianEmail: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext(form);
      }}
    >
      <h2>Student Information</h2>
      <div className="form-grid">
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="surname" placeholder="Surname" onChange={handleChange} required />
        <input name="grade" placeholder="Current Grade (or 'Upgrading')" onChange={handleChange} required />
        <input name="studentPhone" placeholder="Student Contact Number" onChange={handleChange} required />
        <input name="studentEmail" placeholder="Student Email" onChange={handleChange} required />
        <input name="guardianName" placeholder="Parent/Guardian Full Name" onChange={handleChange} required />
        <input name="guardianPhone" placeholder="Parent/Guardian Contact Number" onChange={handleChange} required />
        <input name="guardianEmail" placeholder="Parent/Guardian Email" onChange={handleChange} required />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default StudentInfoForm;
