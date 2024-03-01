import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Discount from './components/discount/Discount';
import OftenFind from './components/oftenfind/OftenFind';
import ListOfFlats from './components/mayBeGood/listOfFlats';

function SuperMainPage() {
  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch('/api')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Main />
      <Discount />
      <OftenFind />
      <ListOfFlats />
    </>
  );
}

export default SuperMainPage;
