import React from 'react'
import Layout from './components/Layout/Layout';
import MainPage from './components/Pages/MainPage';
import Catalog from './components/Pages/Catalog'
import Cart from './components/Pages/Cart';
import ScrollUp from './components/Layout/ScrollUp';
import ErrorMes from './components/Pages/ErrorMes';
import './css/index.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router';

function App() {
  const [visible, setVisible] = useState(false);

  window.addEventListener('scroll', e => {
    let x = document.documentElement.scrollTop;

    x >= 500 ? setVisible(true) : setVisible(false);
  })

  return (
    <Layout>

      { visible && <ScrollUp /> }

      <Routes>

        <Route path='/error' element={ <ErrorMes /> } />

        <Route path='/' element={ <MainPage /> } />

        <Route path='/catalog' element={ <Catalog /> } />

        <Route path='/cart' element={ <Cart /> } />

        {/* <Route path='/add-new' element={ <AddProduct /> } /> */}

      </Routes>
        
    </Layout>
  );
}

export default App;
