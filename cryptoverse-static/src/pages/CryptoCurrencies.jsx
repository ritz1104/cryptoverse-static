import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Inline static data (previously from ../data/mockData.js)
const allCryptoData = [
  { id: 1, name: 'Bitcoin', ticker: 'BTC', price: '$67,123.45', marketCap: '$1.32T', change: '+1.23%', isPositive: true },
  { id: 2, name: 'Ethereum', ticker: 'ETH', price: '$3,456.78', marketCap: '$415B', change: '-0.56%', isPositive: false },
  { id: 3, name: 'Tether', ticker: 'USDT', price: '$1.00', marketCap: '$110B', change: '+0.01%', isPositive: true },
  { id: 4, name: 'Binance Coin', ticker: 'BNB', price: '$580.12', marketCap: '$85B', change: '+2.75%', isPositive: true },
  { id: 5, name: 'Solana', ticker: 'SOL', price: '$150.99', marketCap: '$68B', change: '-3.10%', isPositive: false },
  { id: 6, name: 'USD Coin', ticker: 'USDC', price: '$1.00', marketCap: '$32B', change: '+0.02%', isPositive: true },
  { id: 7, name: 'XRP', ticker: 'XRP', price: '$0.48', marketCap: '$26B', change: '-1.15%', isPositive: false },
  { id: 8, name: 'Dogecoin', ticker: 'DOGE', price: '$0.13', marketCap: '$19B', change: '+4.50%', isPositive: true },
];


0
const Cryptocurrencies = ({ onCryptoSelect }) => {

  
const navigate = useNavigate();
  return (
    <div className="font-display flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-12">
      <div className="flex flex-wrap justify-between gap-4 px-4">
        <div className="flex flex-col gap-2">
          <p className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
            Top 100 Cryptocurrencies by Market Cap
          </p>
          <p className="text-gray-400 text-base font-normal leading-normal">
            Data is updated in real-time from our trusted sources.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4">
        <label className="flex flex-col min-w-40 h-14 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-white/10 bg-[#0D1117]/50 focus-within:border-primary focus-within:shadow-[0_0_12px_theme(colors.primary/0.5)] transition-all">
            <div className="text-gray-400 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 px-4 text-base font-normal leading-normal"
              placeholder="Search for a cryptocurrency..."
              defaultValue=""
            />
          </div>
        </label>
      </div>

      {/* Crypto Table */}
      <div  className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-white/10 bg-[#0D1117]/50">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr className="bg-white/5">
                <th className="px-4 py-3 text-left text-gray-300 w-1/12 text-sm font-medium leading-normal">#</th>
                <th className="px-4 py-3 text-left text-gray-300 w-3/12 text-sm font-medium leading-normal">Name</th>
                <th className="px-4 py-3 text-left text-gray-300 w-2/12 text-sm font-medium leading-normal">Price</th>
                <th className="px-4 py-3 text-left text-gray-300 w-3/12 text-sm font-medium leading-normal">Market Cap</th>
                <th className="px-4 py-3 text-left text-gray-300 w-2/12 text-sm font-medium leading-normal">24h Change</th>
              </tr>
            </thead>
            <tbody>
              {allCryptoData.map((coin) => (
                <tr
                  key={coin.id}
                  onClick={() => navigate(`/cryptodetails`)}
                  className="border-t border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <td className="h-[72px] px-4 py-2 text-gray-400 text-sm font-normal leading-normal">{coin.uuid}</td>
                  <td className="h-[72px] px-4 py-2 text-white text-sm font-medium leading-normal">{coin.name}

                    <span className="text-gray-500 ml-2">{coin.ticker}</span>
                  </td>
                  <td className="h-[72px] px-4 py-2 text-gray-300 text-sm font-normal leading-normal">{coin.price}</td>
                  <td className="h-[72px] px-4 py-2 text-gray-300 text-sm font-normal leading-normal">{coin.marketCap}</td>
                  <td className={`h-[72px] px-4 py-2 text-sm font-medium leading-normal ${coin.isPositive ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                    {coin.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center p-4">
        <a className="flex size-10 items-center justify-center text-gray-400 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-2xl">chevron_left</span>
        </a>
        <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-lg bg-primary shadow-primary hover-glow transition-all" href="#">1</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-300 rounded-lg hover:bg-white/10 transition-colors" href="#">2</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-300 rounded-lg hover:bg-white/10 transition-colors" href="#">3</a>
        <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-500 rounded-lg">...</span>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-300 rounded-lg hover:bg-white/10 transition-colors" href="#">10</a>
        <a className="flex size-10 items-center justify-center text-gray-400 hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-2xl">chevron_right</span>
        </a>
      </div>
    </div>
  );
};

export default Cryptocurrencies;

