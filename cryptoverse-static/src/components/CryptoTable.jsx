import React from 'react'
// TODO: Replace this with dynamic coins data (API) when ready.
// For demo/teaching we keep static data in-component.
const coins = [
  { rank:1, name:'Bitcoin', symbol:'BTC', price:'$67,123.45', cap:'$1.32T', change:'+1.23%', positive:true },
  { rank:2, name:'Ethereum', symbol:'ETH', price:'$3,456.78', cap:'$415B', change:'-0.56%', positive:false },
  { rank:3, name:'Tether', symbol:'USDT', price:'$1.00', cap:'$110B', change:'+0.01%', positive:true },
  { rank:4, name:'Binance Coin', symbol:'BNB', price:'$580.12', cap:'$85B', change:'+2.75%', positive:true },
  { rank:5, name:'Solana', symbol:'SOL', price:'$150.99', cap:'$68B', change:'-3.10%', positive:false }
]

export default function CryptoTable(){
  return (
    <div className="px-4 py-3">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0D1117]/50">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/5">
            <tr>
              <th className="px-4 py-3 text-left text-gray-300">#</th>
              <th className="px-4 py-3 text-left text-gray-300">Name</th>
              <th className="px-4 py-3 text-left text-gray-300">Price</th>
              <th className="px-4 py-3 text-left text-gray-300">Market Cap</th>
              <th className="px-4 py-3 text-left text-gray-300">24h Change</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(c=> (
              <tr key={c.rank} className="border-t border-white/5 hover:bg-white/5 transition">
                <td className="px-4 py-2 text-gray-400">{c.rank}</td>
                <td className="px-4 py-2 text-white">{c.name} <span className="text-gray-500">{c.symbol}</span></td>
                <td className="px-4 py-2 text-gray-300">{c.price}</td>
                <td className="px-4 py-2 text-gray-300">{c.cap}</td>
                <td className={"px-4 py-2 text-sm " + (c.positive ? 'text-[#22c55e]' : 'text-[#ef4444]') }>{c.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
