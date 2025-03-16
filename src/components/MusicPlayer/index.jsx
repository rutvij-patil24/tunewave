import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  nextSong,
  prevSong,
  playPause,
} from "../../redux/features/playerSlice";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

const MusicPlayer = () => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  console.log("🎵 currentSongs in MusicPlayer:", currentSongs);
  console.log("🎵 currentSongs isArray:", Array.isArray(currentSongs));
  console.log("🎵 currentSongs length:", currentSongs?.length);


  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    console.log("⏭️ Next Song Clicked! Current Index:", currentIndex);
    dispatch(playPause(false));

    if (!shuffle) {
      const newIndex = (currentIndex + 1) % currentSongs.length;
      console.log("Next Song Index:", newIndex);
      dispatch(nextSong(newIndex));
    } else {
      const randomIndex = Math.floor(Math.random() * currentSongs.length);
      console.log("Next Shuffle Song Index:", randomIndex);
      dispatch(nextSong(randomIndex));
    }
  };

  const handlePrevSong = () => {
    console.log("⏮️ Previous Song Clicked! Current Index:", currentIndex);

    let newIndex;
    if (currentIndex === 0) {
      newIndex = currentSongs.length - 1; // Loop back to last song
    } else if (shuffle) {
      newIndex = Math.floor(Math.random() * currentSongs.length);
    } else {
      newIndex = currentIndex - 1;
    }
    console.log("Previous Song Index:", newIndex);
    dispatch(prevSong(newIndex));
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
