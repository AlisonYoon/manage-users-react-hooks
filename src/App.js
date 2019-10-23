import React, { useState } from 'react';
import './App.css';
import UserTable from './table/UserTable';

const App = () => {
    const usersData = [
        {id: 1, name: 'Nora', username: 'hellonora'},
        {id: 2, name: 'Jack', username: 'goldfinch'},
        {id: 3, name: 'Grace', username: 'hipopotamus'}
    ]

    const [users, setUsers] = useState(usersData)
  return (
      <div className="container">
          <h1>CRUD App with Hooks</h1>
          <div className="flex-row">
              <div className="flex-large">
                  <h2>Add user</h2>
              </div>
              <div className="flex-large">
                  <h2>View users</h2>
                  <UserTable users={users} />
              </div>
          </div>
      </div>
  );
}

export default App;
