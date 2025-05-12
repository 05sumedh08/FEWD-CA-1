import React from 'react';

const TeamMemberCard = ({ name, jobTitle }) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <h2>{name}</h2>
            <p>{jobTitle}</p>
        </div>
    );
};

export default TeamMemberCard;
