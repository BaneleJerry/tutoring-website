import React, { useState } from "react";
import "./registrationForm.css";

const StudentInfoForm = ({ onNext, formData }) => {
  const [form, setForm] = useState({
    name: formData?.name || "",
    surname: formData?.surname || "",
    grade: formData?.grade || "",
    studentPhone: formData?.studentPhone || "",
    studentEmail: formData?.studentEmail || "",
    guardianName: formData?.guardianName || "",
    guardianPhone: formData?.guardianPhone || "",
    guardianEmail: formData?.guardianEmail || "",
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
        <input 
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input 
          name="surname"
          placeholder="Surname"
          value={form.surname}
          onChange={handleChange}
          required
        />

        <input
          name="grade"
          placeholder="Current Grade (or 'Upgrading')"
          value={form.grade}
          onChange={handleChange}
          required
        />

        <input
          name="studentPhone"
          placeholder="Student Contact Number"
          value={form.studentPhone}
          onChange={handleChange}
          required
        />

        <input
          name="studentEmail"
          placeholder="Student Email"
          value={form.studentEmail}
          onChange={handleChange}
          required
        />

        <input
          name="guardianName"
          placeholder="Parent/Guardian Name"
          value={form.guardianName}
          onChange={handleChange}
          required
        />

        <input
          name="guardianPhone"
          placeholder="Parent/Guardian Number"
          value={form.guardianPhone}
          onChange={handleChange}
          required
        />

        <input
          name="guardianEmail"
          placeholder="Parent/Guardian Email"
          value={form.guardianEmail}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default StudentInfoForm;
