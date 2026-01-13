import { useState } from "react";
import "./RegistrationEmbed.css";

const RegistrationEmbed = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="registration-embed" id="registration-embed">
      <h1>Student Registration</h1>

      <p className="intro">
        Please complete the registration form below. Once submitted, our team
        will contact you via WhatsApp to confirm your details.
      </p>

      {!showForm && (
        <button
          className="open-form-btn"
          onClick={() => setShowForm(true)}
        >
          Start Registration
        </button>
      )}

      {showForm && (
        <div className="iframe-wrapper">
          <iframe
            src="https://forms.office.com/pages/responsepage.aspx?id=u2rkqZTEAEek6TiioywRwsz7OJ8KmQ1HjflnApoXVlZUMzk5UUYwT0MyOTJTUVpKRlpOT0ZLQlZPUC4u&route=shorturl"
            title="Lumos Registration Form"
            width="100%"
            height="900"
            frameBorder="0"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
};

export default RegistrationEmbed;
