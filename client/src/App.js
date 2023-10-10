import React from 'react';
import CRUDClientes from './components/CRUDClientes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <CRUDClientes />
      </div>
      <Footer />
    </>
  );
}

export default App;
