import React from 'react';
import './Create.css';
import Header from '../../components/header/Header';

function Create() {
  return (
    <>
      <Header />
      <div className='create_a'>
        <p className='new_create'>Новое объявление</p>
        <p className='new_deal'>Сделка</p>
        <button className='deal_options'>Аренда</button>
        <button className='deal_options'>Продажа</button>
        <p className='new_arenda'>Аренда</p>
        <button className='arenda_options'>Долгострочная</button>
        <button className='arenda_options'>Посуточная</button>
      </div>
    </>
  );
}

export default Create;
