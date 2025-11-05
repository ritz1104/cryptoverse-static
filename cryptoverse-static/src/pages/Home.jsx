import React from 'react';
import axios from 'axios';
// Inline static data (previously from ../data/mockData.js)
const statsData = [
  { title: 'Total Cryptocurrencies', value: '9,000+' },
  { title: 'Total Market Cap', value: '$2.1T' },
  { title: '24h Volume', value: '$150B' },
];

const topCryptoData = [
  { id: 1, name: 'Bitcoin', ticker: 'BTC', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhX6IhbVS_GRylHB8wVk0oFuVVrrtCO0L4f2_BuXRg-PCV7crH00WzCG2gU88Gk7Sq6iGgq7R9SfEwbZDCO-06rJ-eOru6zWoQsQIGSBpxcY1xD3UC-Q34GpWyiedsP86R2NXYbe-kyJLT2Mu24yZtGAwH2odGEUgrV4Q4uaNMUK0TZgTlr3VLpFTiTlRI3LNrWRqOf6eOfSYOHVwsKhJGNdpQK1RFk5G_hDLP4dX-44LvHzGjd5MRn4EhvmoSIwsmvkJ_w6uNjiBR', price: '$65,432.10', change: '+2.5%', marketCap: '$1.28T', isPositive: true },
  { id: 2, name: 'Ethereum', ticker: 'ETH', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8dt1Iwh7hkyNe3gHW8Ps7PFza8psRABh4hejzjFIKzD7EMHsi0dPO4zX2B_vreP5Gijo56JSES1zfJkJPB2_dvELCI5z5OZAD2bcjvwJe16dtTWV01_7fjuE8GwaiI2ZSwYZ0gBJzLcmCMiLMqzqWgpATUJpKsKFV7goichRi8y0ag2SoRTcsY70GTrzGeBLRWbzhNsiFwqDWw9YPoch8ZDlQxkqQ1DRH2MN5bqMuH8MGQt_5t8Xgn4hRxFhqwIR2CxYdhI6wt9b', price: '$3,456.78', change: '+4.1%', marketCap: '$415B', isPositive: true },
  { id: 3, name: 'Tether', ticker: 'USDT', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbCXinTGtvTR_ehZDuKocRvqQO3zuts1dV7-Pq4oYIieUp0uES8UULWPxngrtT5OpHko_YoE5ASCYcmbU0D4LjHmm4EyZ70xmN2xH6j_CVsze0dB2JQtD6KEiHfNgyIXFCPhnyl87kqwEmMCLThS1Ipdwh9f83KC8Nl56PCSgw9YTi93ItdTDOVDvuPl5S5DyYRi7ECLZ037h0X0wgDHDU-PDSR6e60YjcmrnQOep_InAi6cF5PvOXsnlBFaVpMV4xeBMmKzsnsv6M', price: '$1.00', change: '-0.1%', marketCap: '$110B', isPositive: false },
  { id: 4, name: 'Solana', ticker: 'SOL', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHNRgeP0tk2CMaOHrpDdBRiidfTqe5FmZOp2xmm2Icj-IEOQhkB7TguskS8T5K7U3KjWlshhSHInPSaQQLWAU0CBcu3tdLve_vJCWjOnZeq0WY2zGvz35_lpPiernuse96EGxliPkFFKeZAJ-55MjZvwUHVt26_AmatE3RffOh2WNP1pS4Dx7TeQTuooSyxCjARlxlY82INhxmk_K96wHkBFCa0c6HqrSWTPTiOmLXSEoRG3hd9PLkZFK_q03-6oIA5EOF7MbVCzz6', price: '$150.23', change: '-1.8%', marketCap: '$68B', isPositive: false },
  { id: 5, name: 'BNB', ticker: 'BNB', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjF_mbgN1fkXyctAm1SEPuTN42BQmgkHIS_3EcNIEfSwkrZWNuPC_vmaqmQFCLOyydN7Ymva06O9L9rVrS-B3btow-vKTe9GT6gLVuxh9Wv-6E7fVATZuylM-DXcwltPnmmWnB_F5DBJZ89uqOl2D_gphTXKwmPOVHxOnuAbK_FkBnymaQMSIOdYPZCi4kOEv6KAvUAKLZzz7JOlaVl07rzxe49OCHp4YNFImrzGgraUtC5Q2y3EXi2fHUg_GIAziKOAkUfDXb7W0j', price: '$580.55', change: '+1.2%', marketCap: '$85B', isPositive: true },
];

const latestNewsData = [
  { id: 1, title: 'Bitcoin Hits New All-Time High Amidst Market Frenzy', description: 'Experts weigh in on the recent surge and what it means for the future of digital assets.', source: 'CoinDesk • 2 hours ago', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASXXZh39K0grJSteDtkQ2YURh2m5ihasFxN-JExW0RjbOVD7JjU-_mjWxuCGaR1RA9QqbT-53LwWoA0FRlpAuE0N_1K5bl1hkDQTginJtPvh2-F5XRzufwq6xGZpTtnRMMavgcBb54sm9IeMY4wjtYJieSsBiqP-xlL7j9Z3v0iWuLG28EVzcEgLyV9Cpb2x5ET7GMqL9GKTAjiMz-P8wKcfPvt-wwvOTUBvn9Zf2TOfd6JHnaAhXfFagyNweOg_SK1G2iHTuLfLWN', imageAlt: 'Abstract image for news article about market trends' },
  { id: 2, title: "Ethereum's Next Major Upgrade: What to Expect from 'Prague'", description: 'A deep dive into the upcoming changes that promise to enhance scalability and security.', source: 'Decrypt • 5 hours ago', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo7tJHKjfg7WiVGBHRTU8QK3yCz2CweWTfgNrMpGI_vmcqvdRZdTNDOFzOs-_zyp_x4Z1TUwONR5yskRe631R0FYzDSIuJlKTOG_YGXVpZlm1Fxgl3EPxz0hzV1JPlfx15SBBfIdiY0dTD8I8Nhmy-LiklYc_HZtHa7PTkaA_tZLXtg5n54ixzAGPGlrVD4hCjq2dUFeQL4zOcpVMBzhSjO0cnmq4XDFiBWTuuNTOFCyXJu25cN36ls8Ve3T5kbi6KNzW99i9sewEP', imageAlt: 'Abstract image for news article about Ethereum' },
  { id: 3, title: 'Global Regulators Turn Their Attention to DeFi Protocols', description: 'The decentralized finance space is facing new scrutiny from international bodies.', source: 'The Block • 8 hours ago', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgPPPJxRO2xML7FO_yVnJNCb4cZ5rgfeX7xwGSq7AF8FOF7-QToSIA54a9ueRYh4GjY0II5mcaewhwO1iIkUE0vSVYsE4RPaHz9T93qn2baK1fjaNuA3tu52cbtncFDVsfngLmxrCdmbRIa4iDufhiV23c72osBjG1U0Np5mvA1jAxYoX-IaVRC_kF7ggqh4pUl8FIxSiJFXu639r3unWZjyJh_McLLuK95Hk3S4HahOZvgJxfb9o-7oQOYvCpn2UR7hCoBwXf_dVP', imageAlt: 'Abstract image for news article about DeFi regulation' },
];



// This page is the content from v1
const Home = ({ onCryptoSelect }) => {
  return (
    <div className="font-display mt-8">
      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 p-4">
        {statsData.map((stat) => (
          <div
            key={stat.title}
            className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-white/10 bg-white/5 transition-all card-hover backdrop-blur-sm"
          >
            <p className="text-[#E0E0E0] text-base font-medium leading-normal">
              {stat.title}
            </p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Top 10 Crypto Section */}
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Top 10 Cryptocurrencies
      </h2>
      <div className="px-4 py-3">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="sr-only sm:not-sr-only">
              <tr className="bg-transparent">
                <th className="px-4 py-3 text-white text-sm font-medium w-[5%]">#</th>
                <th className="px-4 py-3 text-white text-sm font-medium w-[30%]">Name</th>
                <th className="px-4 py-3 text-white text-sm font-medium text-right w-[25%]">Price</th>
                <th className="px-4 py-3 text-white text-sm font-medium text-right w-[20%]">24h %</th>
                <th className="px-4 py-3 text-white text-sm font-medium text-right w-[20%]">Market Cap</th>
              </tr>
            </thead>
            <tbody className="sm:border-t border-white/10">
              {topCryptoData.map((coin) => (
                <tr
                  key={coin.id}
                  onClick={() => onCryptoSelect(coin.id)}
                  className="block sm:table-row mb-4 sm:mb-0 border border-white/10 rounded-xl sm:border-none sm:rounded-none sm:border-b hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <td className="flex sm:table-cell p-4 sm:p-0 sm:px-4 sm:py-2 text-sm font-normal text-[#E0E0E0]"><span className="sm:hidden font-bold mr-2 text-white">#</span>{coin.id}</td>
                  <td className="flex items-center p-4 sm:p-0 sm:px-4 sm:py-2 text-white text-base font-medium sm:font-normal">
                    <img className="w-6 h-6 mr-3 rounded-full" alt={`${coin.name} logo`} src={coin.logo} />
                    {coin.name} <span className="ml-2 text-[#E0E0E0]">{coin.ticker}</span>
                  </td>
                  <td className="flex sm:table-cell justify-between p-4 sm:p-0 sm:text-right sm:px-4 sm:py-2 text-sm text-[#E0E0E0]"><span className="sm:hidden font-bold mr-2 text-white">Price</span>{coin.price}</td>
                  <td className={`flex sm:table-cell justify-between p-4 sm:p-0 sm:text-right sm:px-4 sm:py-2 text-sm ${coin.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                    <span className="sm:hidden font-bold mr-2 text-white">24h %</span>{coin.change}
                  </td>
                  <td className="flex sm:table-cell justify-between p-4 sm:p-0 sm:text-right sm:px-4 sm:py-2 text-sm text-[#E0E0E0]"><span className="sm:hidden font-bold mr-2 text-white">Market Cap</span>{coin.marketCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest News Section */}
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Latest Crypto News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {latestNewsData.map((article) => (
          <div key={article.id} className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 transition-all card-hover cursor-pointer">
            <img className="w-full h-48 object-cover" alt={article.imageAlt} src={article.imageUrl} />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">{article.title}</h3>
              <p className="text-sm text-[#E0E0E0] flex-1">{article.description}</p>
              <p className="text-xs text-primary/80 mt-4">{article.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

