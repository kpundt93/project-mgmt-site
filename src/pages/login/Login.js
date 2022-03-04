import React from 'react'
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
// styles
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  }

  return (
    <div>
      <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
      </label>
      <label>
        <span>password:</span>
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
      </label>
      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <div className='error'>{error}</div>}
    </form>
    </div>
  )
}