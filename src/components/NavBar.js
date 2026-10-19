import {
  Home,
  CirclePlay,
  UserSquare2,
  UserCircle,
  History,
  ListVideo,
  Clock,
  ThumbsUp,
  VideoIcon,
  ArrowDownToLine,
  PlaySquare,
  Menu,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return (
      <div className="p-2">
        <Link to="/">
          <div className="flex flex-col items-center gap-1 mb-6">
            <Home size={22} />
            <span className="text-[10px]">Home</span>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-1 mb-6">
          <CirclePlay size={22} />
          <span className="text-[10px]">Shorts</span>
        </div>
        <div className="flex flex-col items-center gap-1 mb-6">
          <PlaySquare size={22} />
          <span className="text-[10px]">Subscriptions</span>
        </div>
        <div className="flex flex-col items-center gap-1 mb-6">
          <UserCircle size={22} />
          <span className="text-[10px]">You</span>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/50
          transition-opacity duration-300
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <aside
        className={`fixed top-0 left-0 z-50
                        h-screen w-[240px] overflow-y-auto
                        bg-white shadow-lg
                        transition-transform duration-300 ease-in-out
                        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="py-4 px-6 scrollbar-none">
          <div className="flex gap-6 col-span-2 items-center">
            <button onClick={() => dispatch(toggleMenu())}>
              <Menu />
            </button>
            <img src="/youtube-logo.jpg" alt="youtube logo" width={110} />
          </div>
          <Link to="/">
            <div className="flex p-2 gap-2 mt-4">
              <Home />
              Home
            </div>
          </Link>
          <div className="flex p-2 gap-2 border-b pb-5">
            <CirclePlay />
            Shorts
          </div>
          <div className="flex p-2 gap-2 pt-4">
            <PlaySquare />
            Subscriptions
          </div>
          <ul className="border-b pb-2">
            <li className="flex p-2 gap-2">T-series</li>
            <li className="flex p-2 gap-2">Josh Talks</li>
            <li className="flex p-2 gap-2">The Lallantop</li>
            <li className="flex p-2 gap-2">Cricket</li>
          </ul>
          <div className="flex p-2 gap-2 pt-4">
            <UserCircle />
            You
          </div>
          <ul>
            <li className="flex p-2 gap-2">
              <UserSquare2 />
              Your channel
            </li>
            <li className="flex p-2 gap-2">
              <History />
              History
            </li>
            <li className="flex p-2 gap-2">
              <ListVideo />
              Playlists
            </li>
            <li className="flex p-2 gap-2">
              <Clock />
              Watch later
            </li>
            <li className="flex p-2 gap-2">
              <ThumbsUp />
              Liked videos
            </li>
            <li className="flex p-2 gap-2">
              <VideoIcon />
              Your videos
            </li>
            <li className="flex p-2 gap-2">
              <ArrowDownToLine />
              Downloads
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
