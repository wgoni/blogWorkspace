import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../auth/authSlice';
import Navbar from './Navbar';

function Header({ onToggleSidebar }) {
  const user = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();

  //console.log(`HEADER USER:${user}`)
  const handleLogout = () => {
    dispatch(logout());
  };
;

  return (
    <header style={{ display:'flex', background: '#333', color: 'white' }}>
      <button onClick={onToggleSidebar} style={{ marginRight: '1rem' }}>
        ☰
      </button>
      <Navbar user={user} onLogout={handleLogout} />
    </header>
  );
}

export default Header;
