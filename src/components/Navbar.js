import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks//useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
// styles
import './Navbar.css'
// images
import Temple from '../assets/temple.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='dojo logo' />
          <span>The Dojo</span>
        </li>
        {/* show links if no user is logged in */}
        {!user && (
          <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </>
        )}
        {/* show button when user is logged in */}
        {user && (
          <li>
            {!isPending && <button className='btn' onClick={logout}>Logout</button>}
            {isPending && <button className='btn' disabled>Logging out...</button>}
          </li>
        )}
      </ul>
    </div>
  )
}
