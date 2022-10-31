import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    // <--------- deleting a user -----------> 
    const handleDelete = (user) => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);
        if(agree){
          fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              alert('User deleted succesfully!');
              const remainigUser = displayUsers.filter(usr => usr._id !== user._id);
              setDisplayUsers(remainigUser);
            }
          })
        }
    }
    return (
      <div>
        <h1>Users: {displayUsers.length}</h1>
        <div>
          {displayUsers.map((user) => (
            <div key={user._id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <Link to={`/update/${user._id}`}>
                <button>Update</button>
              </Link>
              <p>
                <button onClick={() => handleDelete(user)}>X</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Home;