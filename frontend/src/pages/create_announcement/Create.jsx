import React from 'react';
import './Create.css';
import Header from '../../components/header/Header';
import { useState } from 'react';

function Create() {
  const [arenda, setArenda] = useState(false);
  const [sale, setSale] = useState(false);
  const [long, setLong] = useState(false);
  const [arendaDay, setarendaDay] = useState(false);

  function ifArenda() {
    setArenda(!arenda);
  }

  function ifLong() {
    setLong(!long);
  }

  function ifSale() {
    setSale(!sale);
  }

  function ifArendaDay() {
    setarendaDay(!arendaDay);
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
        {arenda && (
          <div className='if_arenda'>
            <p className='new_arenda'>Аренда</p>
            <button onClick={ifLong} className='arenda_options'>
              Долгострочная
            </button>
            <button onClick={ifArendaDay} className='arenda_options'>
              Посуточная
            </button>
          </div>
        )}
        {long && (
          <div className='longArenda'>
            <p>Жилая недвижемость</p>
            <button className='long_options'>Квартира</button>
            <button className='long_options'>Комната</button>
            <button className='long_options'>Коттедж</button>
          </div>
        )}
        {arendaDay && (
          <div className='arendaDay'>
            <p>Объект</p>
            <button className='day_option'>Квартира</button>
            <button className='day_option'>Комната</button>
            <button className='day_option'>Дом</button>
          </div>
        )}
        <button onClick={ifSale} className='deal_options'>
          Продажа
        </button>

        {sale && <div className='wqe'>wqe</div>}
        <a href='#' className='create_myself'>
          Создать самому
        </a>
      </div>
    </>
  );
}

export default Create;
