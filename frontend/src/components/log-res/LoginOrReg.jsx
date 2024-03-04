import React, { useState } from 'react';
import axios from 'axios';
import './log-res.css';

function LoginOrReg() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addPost = async () => {
    try {
      await axios.post('http://localhost:5001/api/posts', { title, body });

      setTitle('');
      setBody('');
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
          <a className='voiti' href=''>
            Войти
          </a>
        </p>
        <form onSubmit={addPost}>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='title'
            required
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Bpdy'
            required
          />
          <button type='submit'>Add Post</button>
        </form>
      </div>
    </>
  );
}

export default LoginOrReg;
