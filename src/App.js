import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Your Brand Name</div>
        <button className="btn-get-users" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
