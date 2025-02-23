import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Three-Tier App</h1>
            <UserForm fetchUsers={fetchUsers} />
            <UserList users={users} />
        </div>
    );
}

export default App;
