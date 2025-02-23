import React from "react";

const UserCard = ({ name, email }) => {
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "8px" }}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserCard;
