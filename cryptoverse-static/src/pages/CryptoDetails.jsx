import React, { useState } from 'react';

// Inline crypto details data (previously from ../data/mockData.js)
const cryptoDetailsData = {
  1: {
    id: 1,
    name: 'Bitcoin',
    ticker: 'BTC',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA6kfufI5ijRR0AneHQXJdbHh0H_6anllLqil6vBY3UDcg_ku7Kkk9p0B8MyVrG9816nnZ34FeuhGcW-DdMlAxyHWJ6OEOw_ey12FiET5LlL5WlYsOrTUf91VK-hnDKQX1VbiKfyoyLf2wvVkOzFYEuux22lYJVaqIjycGK1JOKCl7-Ofd8JY2RFOv0-vadn9kiLJ3LvW1TbBqiQ6E0U2tFDc4LY8nkeo0y8UkXUSFeMOJCGU-9uwXSmaMk21WC4qNokifTaxZfwTj',
    price: '$68,045.12',
    changePercent: '+2.5%',
    changeValue: '+$1,660.00',
    isPositive: true,
    stats: {
      marketCap: '$1.34T',
      volume24h: '$25.8B',
      circulatingSupply: '19.7M BTC',
      allTimeHigh: '$73,750.07',
      allTimeLow: '$65.53',
      totalSupply: '21M BTC',
    },
    about: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.",
    links: [
      { name: 'Website', url: '#' },
      { name: 'Whitepaper', url: '#' },
      { name: 'Explorer', url: '#' },
    ],
  },
  2: {
    id: 2,
    name: 'Ethereum',
    ticker: 'ETH',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8dt1Iwh7hkyNe3gHW8Ps7PFza8psRABh4hejzjFIKzD7EMHsi0dPO4zX2B_vreP5Gijo56JSES1zfJkJPB2_dvELCI5z5OZAD2bcjvwJe16dtTWV01_7fjuE8GwaiI2ZSwYZ0gBJzLcmCMiLMqzqWgpATUJpKsKFV7goichRi8y0ag2SoRTcsY70GTrzGeBLRWbzhNsiFwqDWw9YPoch8ZDlQxkqQDRH2MN5bqMuH8MGQt_5t8Xgn4hRxFhqwIR2CxYdhI6wt9b',
    price: '$3,456.78',
    changePercent: '+4.1%',
    isPositive: true,
  },
  3: {
    id: 3,
    name: 'Tether',
    ticker: 'USDT',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbCXinTGtvTR_ehZDuKocRvqQO3zuts1dV7-Pq4oYIieUp0uES8UULWPxngrtT5OpHko_YoE5ASCYcmbU0D4LjHmm4EyZ70xmN2xH6j_CVsze0dB2JQtD6KEiHfNgyIXFCPhnyl87kqwEmMCLThS1Ipdwh9f83KC8Nl56PCSgw9YTi93ItdTDOVDvuPl5S5DyYRi7ECLZ037h0X0wgDHDU-PDSR6e60YjcmrnQOep_InAi6cF5PvOXsnlBFaVpMV4xeBMmKzsnsv6M',
    price: '$1.00',
    changePercent: '-0.1%',
    isPositive: false,
  },
  4: {
    id: 4,
    name: 'Solana',
    ticker: 'SOL',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHNRgeP0tk2CMaOHrpDdBRiidfTqe5FmZOp2xmm2Icj-IEOQhkB7TguskS8T5K7U3KjWlshhSHInPSaQQLWAU0CBcu3tdLve_vJCWjOnZeq0WY2zGvz35_lpPiernuse96EGxliPkFFKeZAJ-55MjZvwUHVt26_AmatE3RffOh2WNP1pS4Dx7TeQTuooSyxCjARlxlY82INhxmk_K96wHkBFCa0c6HqrSWTPTiOmLXSEoRG3hd9PLkZFK_q03-6oIA5EOF7MbVCzz6',
    price: '$150.23',
    changePercent: '-1.8%',
    isPositive: false,
  },
  5: {
    id: 5,
    name: 'BNB',
    ticker: 'BNB',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjF_mbgN1fkXyctAm1SEPuTN42BQmgkHIS_3EcNIEfSwkrZWNuPC_vmaqmQFCLOyydN7Ymva06O9L9rVrS-B3btow-vKTe9GT6gLVuxh9Wv-6E7fVATZuylM-DXcwltPnmmWnB_F5DBJZ89uqOl2D_gphTXKwmPOVHxOnuAbK_FkBnymaQMSIOdYPZCi4kOEv6KAvUAKLZzz7JOlaVl07rzxe49OCHp4YNFImrzGgraUtC5Q2y3EXi2fHUg_GIAziKOAkUfDXb7W0j',
    price: '$580.55',
    changePercent: '+1.2%',
    isPositive: true,
  },
};

// This is the new page content from v4
const CryptoDetails = ({ cryptoId }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeTime, setActiveTime] = useState('24h');

  // Find the crypto data from our mock DB
  const crypto = cryptoDetailsData[cryptoId] || cryptoDetailsData[1]; // Fallback to Bitcoin
  const stats = crypto.stats;

  return (
    <div className="font-display mt-8 flex flex-col gap-8">
      {/* ProfileHeader */}
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
          <div className="flex gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24 md:min-h-32 md:w-32"
              aria-label={`${crypto.name} logo`}
              style={{ backgroundImage: `url("${crypto.logo}")` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-off-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em]">
                {crypto.name} ({crypto.ticker})
              </p>
              <p className="text-light-gray text-base font-normal leading-normal">
                {crypto.price}
              </p>
              <p className={crypto.isPositive ? "text-green-400 text-base font-normal leading-normal" : "text-red-400 text-base font-normal leading-normal"}>
                {crypto.changePercent}
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-[480px] gap-3 @[480px]:w-auto">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/5 text-off-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto hover:bg-white/10 transition-colors">
              <span className="truncate">Add to Watchlist</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-electric-cyan text-navy-blue text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto hover:bg-opacity-90 transition-all shadow-glow-cyan">
              <span className="truncate">Buy/Trade</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white/5 rounded-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div className="flex flex-col">
            <p className="text-light-gray text-base font-medium leading-normal">Price History</p>
            <p className="text-off-white tracking-light text-[32px] font-bold leading-tight truncate">
              {crypto.price}
            </p>
            <div className="flex gap-2">
              <p className="text-light-gray text-sm font-normal leading-normal">24h</p>
              <p className={crypto.isPositive ? "text-green-400 text-sm font-medium leading-normal" : "text-red-400 text-sm font-medium leading-normal"}>
                {crypto.changeValue} ({crypto.changePercent})
              </p>
            </div>
          </div>
          {/* Chips */}
          <div className="flex gap-2 p-3 flex-wrap mt-4 md:mt-0">
            {['24h', '7d', '1m', '1y', 'All'].map((time) => (
              <div
                key={time}
                onClick={() => setActiveTime(time)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 cursor-pointer transition-colors ${
                  activeTime === time
                    ? 'bg-electric-cyan/20 text-electric-cyan'
                    : 'bg-white/5 hover:bg-white/10 text-off-white'
                }`}
              >
                <p className="text-sm font-medium leading-normal">{time}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Chart */}
        <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
          <svg fill="none" height="148" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="236" x2="236" y1="1" y2="149">
                <stop stopColor="#00FFFF" stopOpacity="0.3"></stop>
                <stop offset="1" stopColor="#00FFFF" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chart-gradient)"></path>
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#00FFFF" strokeLinecap="round" strokeWidth="3"></path>
          </svg>
          <div class="flex justify-around">
            <p class="text-light-gray text-[13px] font-bold leading-normal tracking-[0.015em]">12 AM</p>
            <p class="text-light-gray text-[13px] font-bold leading-normal tracking-[0.015em]">4 AM</p>
            <p class="text-light-gray text-[13px] font-bold leading-normal tracking-[0.015em]">8 AM</p>
            <p class="text-light-gray text-[13px] font-bold leading-normal tracking-[0.015em]">12 PM</p>
            <p class="text-light-gray text-[13px] font-bold leading-normal tracking-[0.015em]">4 PM</p>
            <p class="text-light-gray text-[13px] font-bold leading-normal tracking-[0.015em]">8 PM</p>
            <p class="text-light-gray text-[13px] font-bold leading-normal tracking-[0.015em]">Now</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="pb-3">
        <div className="flex border-b border-white/10 px-4 gap-8">
          {['Overview', 'Markets', 'Stats'].map((tab) => (
            <a
              key={tab}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab);
              }}
              className="relative flex flex-col items-center justify-center pb-[13px] pt-4"
            >
              <p
                className={`text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${
                  activeTab === tab
                    ? 'text-off-white'
                    : 'text-light-gray hover:text-off-white'
                }`}
              >
                {tab}
              </p>
              {activeTab === tab && (
                <div className="absolute bottom-0 h-[3px] w-full bg-electric-cyan shadow-glow-cyan"></div>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-light-gray text-sm font-medium mb-1">Market Cap</p>
            <p className="text-off-white text-xl font-bold">{stats.marketCap}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-light-gray text-sm font-medium mb-1">24h Volume</p>
            <p className="text-off-white text-xl font-bold">{stats.volume24h}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-light-gray text-sm font-medium mb-1">Circulating Supply</p>
            <p className="text-off-white text-xl font-bold">{stats.circulatingSupply}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-light-gray text-sm font-medium mb-1">All-Time High</p>
            <p className="text-off-white text-xl font-bold">{stats.allTimeHigh}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-light-gray text-sm font-medium mb-1">All-Time Low</p>
            <p className="text-off-white text-xl font-bold">{stats.allTimeLow}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-light-gray text-sm font-medium mb-1">Total Supply</p>
            <p className="text-off-white text-xl font-bold">{stats.totalSupply}</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6 bg-white/5 rounded-lg p-6">
          <h3 className="text-off-white text-lg font-bold mb-3">About {crypto.name}</h3>
          <p className="text-light-gray text-sm leading-relaxed">
            {crypto.about}
          </p>
          <div className="flex gap-4 mt-4">
            {crypto.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-electric-cyan text-sm font-medium hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;

