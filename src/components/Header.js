import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className='header'>
        <Link to="/">Home</Link>
        <Link to="/users/add">Add User</Link>
      </div>
    );
};

export default Header;