// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [username, setUsername] = useState(""); // State for the username
//   const [password, setPassword] = useState(""); // State for the password
//   const [error, setError] = useState(""); // State for error messages

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Dummy authentication logic
//     if (username === "admin" && password === "1234") {
//       // Redirect to Testimonials page (manually)
//       window.location.href = "#testimonials";
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin} className="login-form">
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React from 'react';
import './Login.css';

const UserManager = () => {
  const [users, setUsers] = ([
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
  ]);

  const addUser = () => {
    // Add user logic here
    const newUser = {
      id: users.length + 1,
      username: `user${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
    };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="user-manager">
      <h2>User Manager</h2>
      <button onClick={addUser} className="add-user-btn">Add User</button>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <span>{user.username} - {user.email}</span>
            <button onClick={() => deleteUser(user.id)} className="delete-user-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManager;

