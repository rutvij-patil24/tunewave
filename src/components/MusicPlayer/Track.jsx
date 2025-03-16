import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => {
  if (!activeSong?.id) return <p className="text-white">No active Song</p>;

  return (
    <div className="flex-1 flex items-center justify-start">
      {/* Animated Cover Art */}
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img
          src={activeSong?.attributes?.artwork?.url.replace("{w}", "80").replace("{h}", "80")}
          alt="cover art"
          className="rounded-full"
        />
      </div>

      {/* Song Title & Artist */}
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {activeSong?.attributes?.name || "No active Song"}
        </p>
        <p className="truncate text-gray-300">
          {activeSong?.attributes?.artistName || "Unknown Artist"}
        </p>
      </div>
    </div>
  );
};

export default Track;
