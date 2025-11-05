import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cryptocurrencies from './pages/CryptoCurrencies';
import CryptoDetails from './pages/CryptoDetails';
import News from './pages/News';
import Exchanges from './pages/Exchanges';

function App() {

  // Static single-page render (no client-side routing)
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #0D1120, #1A1035)',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
            <Header />
            {/* Render the Home page statically */}
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CryptoCurrencies" element={<Cryptocurrencies />} />
              <Route path="/CryptoDetails" element={<CryptoDetails />} />
              <Route path="/News" element={<News />} />
              <Route path="/Exchanges" element={<Exchanges />} />
           </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

