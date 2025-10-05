import React from "react";
import "./Team.css"; // Importing the CSS file

const TeamCard = ({ name, role, description, image }) => {
  return (
    <div className="team-card" id="team">
      <img src={image} alt={name} className="team-avatar" />
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <p className="team-description">{description}</p>
    </div>
  );
};

export default TeamCard;
