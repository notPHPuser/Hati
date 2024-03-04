import React from 'react';
import './app.css';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Arenda from './pages/arenda/Arenda';
import SuperMainPage from './SuperMainPage';
import Sell from './pages/sell/Sell';
import LoginOrReg from './components/log-res/LoginOrReg';
import OfrtenFlat from './pages/OftenList/buyFlat/OfrtenFlat';
import BuyRoom from './pages/OftenList/buyRoom/BuyRoom';
import ListReg from './components/log-res/ListReg';

const router = createBrowserRouter([
  {
    path: '/arenda',
    element: <Arenda />,
  },
  {
    path: '/',
    element: <SuperMainPage />,
  },
  {
    path: '/sell',
    element: <Sell />,
  },
  {
    path: '/log-res',
    element: <LoginOrReg />,
  },
  {
    path: '/buyFlat',
    element: <OfrtenFlat />,
  },
  {
    path: '/buyRoom',
    element: <BuyRoom />,
  },
  {
    path: '/listReg',
    element: <ListReg />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
