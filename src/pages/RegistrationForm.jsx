import React, { useState } from "react";
import emailjs from "emailjs-com";
import StudentInfoForm from "../components/registration/StudentInfoForm";
import SubjectInfoForm from "../components/registration/SubjectInfoForm";
import StudentProgresForm from "../components/registration/StudentProgresForm";
import ReachForm from "../components/registration/ReachForm";
import "../components/registration/registrationForm.css";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

const handleSubmit = (childData) => {
  // Merge parent and child data
  const finalData = {
    ...formData,   // parent data
    ...childData,  // latest child values (reach, referrer)
  };

  // Build EmailJS temp form
  const tempForm = document.createElement("form");

  Object.keys(finalData).forEach((key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;

    if (Array.isArray(finalData[key])) {
      input.value = finalData[key].join(", "); // convert arrays to string
    } else if (key === "subjectRatings") {
      input.value = Object.entries(finalData.subjectRatings)
        .map(([sub, rating]) => `${sub}: ${rating}`)
        .join(", ");
    } else {
      input.value = finalData[key] || "";
    }

    tempForm.appendChild(input);
  });

    emailjs
        .sendForm("service_2suyz6d", "template_h8s2dog", tempForm, "J4x3pca13Ct4869XI")
        .then(() => {
        alert("Message sent successfully ✅");
        setFormData({});
        setStep(1);
        })
        .catch((err) => alert("Error: " + err.text));

    console.log("EmailJS data sent:", finalData);
    };



  return (
    <div className="registration-form">
      {step === 1 && <StudentInfoForm onNext={handleNext} formData={formData} />}
      {step === 2 && (
        <SubjectInfoForm
          onNext={handleNext}
          onBack={handleBack}
          formData={formData}
          updateField={updateField}
        />
      )}
      {step === 3 && (
        <StudentProgresForm
          onNext={handleNext}
          onBack={handleBack}
          formData={formData}
          updateField={updateField}
        />
      )}
      {step === 4 && (
        <ReachForm
          onNext={handleNext}
          onBack={handleBack}
          formData={formData}
          updateField={updateField}
          onSubmit={handleSubmit} // call EmailJS on final submit
        />
      )}
    </div>
  );
};

export default RegistrationForm;
