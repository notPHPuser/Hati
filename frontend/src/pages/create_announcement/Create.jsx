import React from 'react';
import './Create.css';
import Header from '../../components/header/Header';
import { useState } from 'react';

function Create() {
  const [arenda, setArenda] = useState(false);
  const [sale, setSale] = useState(false);

  function ifArenda() {
    setArenda(!arenda);
  }

  function ifSale() {
    setSale(!sale);
  }

  return (
    <>
      <Header />
      <p className='p_free_create'>
        Собственники могут <strong>бесплатно</strong> <br /> разместить по одному объявлению <br />в
        каждой категории жилой <br /> недвижимости
      </p>

      <a href='' className='rules_create'>
        Условия бесплатного размещения
      </a>
      <a href='' className='rules_for_all_create'>
        Общие правила
      </a>
      <div className='create_a'>
        <p className='new_create'>Новое объявление</p>
        <p className='new_deal'>Сделка</p>
        <button onClick={ifArenda} className='deal_options'>
          Аренда
        </button>

        <button onClick={ifSale} className='deal_options'>
          Продажа
        </button>
        {arenda && (
          <div className='if_arenda'>
            <p className='new_arenda'>Аренда</p>
            <button className='arenda_options'>Долгострочная</button>
            <button className='arenda_options'>Посуточная</button>
          </div>
        )}
        {sale && <div className='wqe'>wqe</div>}
      </div>
    </>
  );
}

export default Create;
