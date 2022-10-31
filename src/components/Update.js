import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState({});

     const handleUpdateUser = (event) => {
       event.preventDefault();
       console.log(user);

       fetch(`http://localhost:5000/users/${storedUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data => {
        if (data.modifiedCount > 0){
            alert('User updated!!')
            console.log(data);
        } 
       })
       
     };

     const handleInputChange = (event) => {
       const field = event.target.name;
       const value = event.target.value;
       const newUser = { ...user };
       newUser[field] = value; // objName[property] = value;
       setUser(newUser);
     };
     
    return (
      <div>
        <h2>Please Update: {storedUser.name}</h2>
        <form onSubmit={handleUpdateUser}>
          <input
            onChange={handleInputChange}
            defaultValue={storedUser.name}
            required
            type="text"
            name="name"
            placeholder="name"
          />
          <br />
          <input
            onChange={handleInputChange}
            defaultValue={storedUser.address}
            required
            type="text"
            name="address"
            placeholder="address"
          />
          <br />
          <input
            onChange={handleInputChange}
            defaultValue={storedUser.email}
            required
            type="email"
            name="email"
            placeholder="email"
          />
          <br />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
};

export default Update;