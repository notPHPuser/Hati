import React from 'react';
import Header from '../../components/header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header />
      <div className='profile_left'>
        <ul className='ul_profile'>
          {/* нужно вставить ссылки на определенного зарегатированного пользователя. пока оставлю так. смотреть в ListReg */}
          <li className='li_name_profile'>
            <p className='profile_name'>Имя</p>
            <p className='profile_name'>Фамилия</p>
          </li>
        </ul>
        <ul className='ul_possibilities'>
          <li className='li_possibilities'>
            <p>Сводка</p>
          </li>
          <li className='li_possibilities'>
            <p>Профиль</p>
          </li>
          <li className='li_possibilities'>
            <p>Избранное</p>
          </li>
          <li className='li_possibilities'>
            <p>Операции</p>
          </li>
          <li className='li_possibilities'>
            <p>Уведомления</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
