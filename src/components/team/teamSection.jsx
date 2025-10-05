import React from "react";
import TeamCard from "./teamCard";
import { teamData } from "./teamData";
import "./Team.css"; // Optional for section styling

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet the Team</h2>
      <div className="team-grid">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
