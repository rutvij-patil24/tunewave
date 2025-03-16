import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from "react-icons/bs";

const Controls = ({
  isPlaying,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
}) => {
  // 🔍 Debugging: Log `currentSongs` state
  console.log("🔎 currentSongs in Controls:", currentSongs);
  console.log("🔎 currentSongs isArray:", Array.isArray(currentSongs));
  console.log("🔎 currentSongs length:", currentSongs?.length);

  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      {/* Repeat Button 🔁 */}
      <BsArrowRepeat
        size={20}
        color={repeat ? "red" : "white"}
        onClick={() => setRepeat((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />

      {/* Previous Song Button ⏮️ */}
      {Array.isArray(currentSongs) && currentSongs.length > 0 ? (
        <MdSkipPrevious
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      ) : (
        <MdSkipPrevious size={30} color="gray" className="opacity-50" />
      )}

      {/* Play / Pause Button ▶️⏸️ */}
      {isPlaying ? (
        <BsFillPauseFill
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        <BsFillPlayFill
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}

      {/* Next Song Button ⏭️ */}
      {Array.isArray(currentSongs) && currentSongs.length > 0 ? (
        <MdSkipNext
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      ) : (
        <MdSkipNext size={30} color="gray" className="opacity-50" />
      )}

      {/* Shuffle Button 🔀 */}
      <BsShuffle
        size={20}
        color={shuffle ? "red" : "white"}
        onClick={() => setShuffle((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
    </div>
  );
};

export default Controls;
