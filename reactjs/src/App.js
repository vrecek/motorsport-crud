import React from 'react'
import Layout from './components/Layout/Layout';
import MainPage from './components/Pages/MainPage';
import ScrollUp from './components/Layout/ScrollUp';
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

        <Route path='/' element={ <MainPage /> } />

      </Routes>
        
    </Layout>
  );
}

export default App;
