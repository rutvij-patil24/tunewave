import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  // const activeSong = "Test";

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 
              group-hover:flex ${
                activeSong?.id === song.id
                  ? "bg-opacity-70"
                  : "hidden group-hover:flex"
              }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          src={song.attributes.artwork.url
            .replace("{w}", "300")
            .replace("{h}", "300")}
          alt={song.attributes.name}
          className="w-full h-full"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.id}`}>{song.attributes.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.attributes.name
                ? `/artists/${song?.attributes.name[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.attributes.artistName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
