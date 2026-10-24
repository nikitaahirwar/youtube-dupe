import { Menu, Bell, Search, Plus } from "lucide-react";
import { userPhotoUrl, YOUTUBE_SEARCH_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setShowSuggestions(false);
    navigate(`/search?results=${encodeURIComponent(suggestion)}`);
  };

  return (
    <div className="w-full grid grid-flow-col md:px-4 md:m-2 text-sm md:text-lg shadow-lg">
      <div className="flex gap-1 md:gap-6 col-span-2 items-center">
        <button onClick={() => dispatch(toggleMenu())}>
          <Menu />
        </button>
        <img
          className=" w-16 md:w-[120px]"
          src="/youtube-logo.jpg"
          alt="youtube logo"
        />
      </div>
      <div className="md:p-2 col-span-8 items-center">
        <div className="flex py-1 md:py-0">
          <input
            type="text"
            className="w-[60%] md:ml-0 ml-9 md:w-[80%] border rounded-l-full md:px-4 md:py-2 border-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 md:p-2 md:px-4 ml-[-1px] rounded-r-full"
            onClick={() => handleSuggestionClick(searchQuery)}
          >
            <Search />
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && searchQuery && (
          <div className="absolute bg-white md:w-[53rem] shadow-lg py-2 px-2 ml-2 rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-2 shadow-sm  hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex gap-4 justify-end col-span-2 items-center">
        <button className="flex bg-gray-200 md:px-4 md:py-2 rounded-3xl font-medium">
          <Plus />
          <span className="ml-2 md:inline-block hidden">Create</span>
        </button>
        <Bell />

        <img
          className="rounded-full w-6 md:w-12"
          width={40}
          alt="user-photo"
          src={userPhotoUrl}
        />
      </div>
    </div>
  );
};

export default Header;
