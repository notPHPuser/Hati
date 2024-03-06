import React, { useState } from 'react';
import axios from 'axios';
import './log-res.css';

function LoginOrReg() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const addPost = async () => {
    try {
      await axios.post('http://localhost:5001/api/posts', { login, password, email });

      setLogin('');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='register'>
        <h1>Зарегестироваться</h1>
        <p>
          Уже есть аккаунт?{' '}
          <a className='enter' href=''>
            Войти
          </a>
        </p>
        <form onSubmit={addPost}>
          <input
            type='text'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder='login'
            required
          />
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            required
          />
          <textarea
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            type='password'
            required
          />
          <button type='submit'>Add Post</button>
        </form>
      </div>
    </>
  );
}

export default LoginOrReg;
