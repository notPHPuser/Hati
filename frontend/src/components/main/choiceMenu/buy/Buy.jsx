import React, { useState } from 'react';
import './buy.css';
import WhereBuy from './whereBuy/WhereBuy';
import HowRooms from './howRooms/HowRooms';

function Buy() {
  const [ChoseWhereBuy, ChosesetWhereBuy] = useState(false);
  const [howrooms, setrooms] = useState(false);

  function hideHati() {
    ChosesetWhereBuy(!ChoseWhereBuy);
    document.getElementById('howRooms').classList.add('hide');
    if ((document.getElementById('whereBuy').style.display = 'none')) {
      document.getElementById('arrow').classList.add('arrow-rotate');
    }
  }

  function hideRooms() {
    setrooms(!howrooms);
    document.getElementById('whereBuy').classList.add('hide');
    document.getElementById('howRooms').classList.remove('hide');
    document.getElementById('howRooms').classList.add('showItems');
  }

  return (
    <>
      <div className='buy-main-choice'>
        <button onClick={hideHati} className='what-we-choice'>
          Квартиру в новостойке и второчке
          <div id='arrow' className='arrow'></div>
        </button>

        <button onClick={hideRooms} className='how-many-rooms'>
          Комнат
        </button>
        <button className='cena-for-hati'>Цена</button>
        <input type='text' className='search-menu' placeholder='Город, адрес, метро' />
      </div>
      {ChoseWhereBuy && (
        <div id='whereBuy' className='whereBuy'>
          <WhereBuy />
        </div>
      )}
      {howrooms && (
        <div id='howRooms' className='howRooms'>
          <HowRooms />
        </div>
      )}
    </>
  );
}

export default Buy;
