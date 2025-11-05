import React from 'react';

// This is the NewsCard component from v3
const NewsCard = ({ post }) => {
  return (
    <div className="font-display flex flex-col gap-4 rounded-lg bg-[#1A202C] transition-transform transform hover:-translate-y-1 glow-border cursor-pointer">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
        aria-label={post.imageAlt}
        style={{ backgroundImage: `url("${post.imageUrl}")` }}
      ></div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-white text-lg font-bold leading-normal mb-2">
          {post.title}
        </p>
        <p className="text-[#A0AEC0] text-sm font-normal leading-normal flex-grow">
          {post.description}
        </p>
        <p className="text-white/40 text-xs font-normal leading-normal mt-4">
          {post.source}
        </p>
        <a
          className="text-primary hover:text-primary/80 text-sm font-semibold mt-4 flex items-center gap-1 group"
          href="#"
        >
          Read More
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;

