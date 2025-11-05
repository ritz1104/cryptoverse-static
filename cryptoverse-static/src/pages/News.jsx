import React from 'react';
import NewsCard from '../components/NewsCard';

// Inline static news data (previously from ../data/mockData.js)
const allNewsData = [
  { id: 1, title: 'Bitcoin Hits New All-Time High', description: 'After a volatile week, Bitcoin surged past previous records, reaching an unprecedented value...', source: 'CoinDesk • Oct 26, 2023', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC34pZTrkCZ9xwTFtrexiOV43-QEAv6-m-S8AhbXk8TPxPJEyZBkYKGyzBRK87xEcF32elIjRAH16HD-SAET2dH5WaiUeMYMu6xUDjFKFvaCZdORNnMhQ1jyLkCptEvcJYuXZJ_4d68TKqpXrO6prNyIEajSY47NTJKqPEQAFPHpjTwOPsmBMC7K-Mw5j104gbtRmqfjVztOsU7Ejn7wWYKh2xJ9jvUqkMgm8jE-UQ1_jaas94LW93ifvmqKgY6xhfFQqinv9QYXjsh', imageAlt: 'Abstract glowing blue and purple grid lines' },
  { id: 2, title: "Ethereum's Next Major Upgrade Announced", description: "Developers have laid out the roadmap for the upcoming network upgrade, promising lower fees...", source: 'CryptoNews • Oct 26, 2023', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALnze3b4Kik7EYacHt-bQTjTdPePaC6qLfMMYDOsynhsEE3ulsIPilcEb1DGYy1sQ5rp8uU3gAgfPiJpe1NXhERZW--YVWE5o4U3tO7iOjxmBRK0dWHuQrOMfE7j25jAYyhE0vdO7wsjEy3_e3C2piweyXtLrGnL2CWRrmORcA4wadL2KkQLGMMY-1Lr-PZvXe39BwiGuikCybZJS-JMRSG-YknUZIXzmWm0QIBKHyPr8vQTW8w4CQvAPgeN0XcrIm5t1g8SGAkKPh', imageAlt: 'Geometric purple Ethereum logo on dark background' },
  { id: 3, title: "Regulatory Buzz: What's Next for Crypto?", description: 'Global financial regulators are meeting to discuss a unified framework for digital assets...', source: 'The Block • Oct 25, 2023', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaAN73Hcad1_bw3hGVNztVWUTt3ZhTMD0dMMEoMOId2VOovYE-xFz51t3zsc64hIFFQDfjihtrxoTw3OeAyj3yWdb3Pm41yRpRrEpn6NJkELqtFyY1noA-m7211pAnsSQAwcxqmDP49KHVJ7leSIgHXkSc_BM7c1JlbjV_ky34QDzJmYu-bHOeuaQgUxIgq7yqnBeUtoS4-SyVJekOju8aW66SzEv9IpM2Q62DnQO21UTFyWDpPN5P4BZnpGT4MiM6D7Vr-qQdMvtw', imageAlt: 'Image of a government building with digital overlay' },
];

// This page is the content from v3
const News = () => {
  return (
    <div className="font-display mt-12">
      <div className="flex flex-wrap justify-between gap-4 p-4">
        <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] min-w-72">
          Latest Crypto News
        </h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {allNewsData.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default News;

