import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i }) => {
  const activeSong = "Test";
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 
              group-hover:flex ${
                activeSong?.title === song.attributes.name
                  ? "bg-opacity-70"
                  : "hidden group-hover:flex"
              }`}
        >
          <PlayPause />
        </div>

        <img
          src={song.attributes.artwork.url
            .replace("{w}", "300")
            .replace("{h}", "300")}
          alt={song.attributes.name}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default SongCard;
