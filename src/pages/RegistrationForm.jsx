import React, { useState } from "react";
import StudentInfoForm from "../components/registration/StudentInfoForm";

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const handleBack = () => {setStep(step - 1);};

    return (
        <div className="registration-form">
            {step === 1 && <StudentInfoForm onNext={handleNext} />}
        </div>
    )
}

export default RegistrationForm;