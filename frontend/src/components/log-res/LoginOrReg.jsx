import React from 'react';
import './log-res.css';

function LoginOrReg() {
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
        <form action='' method='post'>
          <input className='email' type='email' placeholder='Эл. почта' />
          <input type='password' className='password' placeholder='Пароль' />
          <input type='password' placeholder='Введите снова' className='password-check' />
          <input type='submit' className='submit' />
        </form>
      </div>
    </>
  );
}

export default LoginOrReg;
