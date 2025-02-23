import React from "react";
import UserCard from "./components/UserCard"; // Import the component

function App() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>React Component Example</h1>
            <UserCard name="Alice Johnson" email="alice@example.com" />
            <UserCard name="Bob Smith" email="bob@example.com" />
        </div>
    );
}

export default App;
