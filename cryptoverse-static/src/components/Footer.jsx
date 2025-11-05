import React from 'react';

// This is the Footer from v3
const Footer = () => {
  return (
    <footer className="font-display flex flex-col gap-8 px-5 py-16 text-center border-t border-solid border-white/10 mt-16">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <a
          className="text-[#A0AEC0] hover:text-primary text-sm font-normal leading-normal transition-colors"
          href="#"
        >
          About
        </a>
        <a
          className="text-[#A0AEC0] hover:text-primary text-sm font-normal leading-normal transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-[#A0AEC0] hover:text-primary text-sm font-normal leading-normal transition-colors"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-[#A0AEC0] hover:text-primary text-sm font-normal leading-normal transition-colors"
          href="#"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          className="text-[#A0AEC0] hover:text-primary transition-colors"
          href="#"
          aria-label="Twitter"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-6.1-1.4-6.1-6.1-6.1-6.1s-2.9 2.2-5.4 2.2c-2.5 0-5.4-2.2-5.4-2.2s0 4.7-6.1 6.1c0 0 1.7-3.5 3.3-4.9-1.3-1.3-2-3.4-2-3.4s2.9 1.4 5.4 1.4c2.5 0 5.4-1.4 5.4-1.4z"></path>
          </svg>
        </a>
        <a
          className="text-[#A0AEC0] hover:text-primary transition-colors"
          href="#"
          aria-label="Discord"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10c2.4 0 4.6-.84 6.36-2.24l-1.85-1.85c-1.2.7-2.6.99-4.51.99-4.41 0-8-3.59-8-8s3.59-8 8-8c1.91 0 3.31.29 4.51.99l1.85-1.85C16.6.84 14.4 0 12 0zm5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-8 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"></path>
          </svg>
        </a>
        <a
          className="text-[#A0AEC0] hover:text-primary transition-colors"
          href="#"
          aria-label="Telegram"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 2L11 13l-2 9 3-7 8-8-10 9z"></path>
          </svg>
        </a>
      </div>
      <p className="text-[#A0AEC0]/50 text-xs font-normal leading-normal">
        © 2023 CryptoVerse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

