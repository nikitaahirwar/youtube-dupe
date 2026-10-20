import { Menu, Bell, Search, Plus } from "lucide-react";
import { userPhotoUrl, YOUTUBE_SEARCH_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
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

  return (
    <div className="grid grid-flow-col px-4 m-2 shadow-lg">
      <div className="flex gap-6 col-span-2 items-center">
        <button onClick={() => dispatch(toggleMenu())}>
          <Menu />
        </button>
        <img src="/youtube-logo.jpg" alt="youtube logo" width={110} />
      </div>
      <div className="p-2 col-span-8 items-center">
        <div className="flex">
          <input
            type="text"
            className="w-[80%] border rounded-l-full px-4 py-2 border-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 px-4 ml-[-1px] rounded-r-full">
            <Search />
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && searchQuery && (
          <div className="absolute bg-white w-[53rem] shadow-lg py-2 px-2 ml-2 rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-2 shadow-sm  hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex gap-4 justify-end col-span-2 items-center">
        <button className="flex bg-gray-200 px-4 py-2 rounded-3xl font-medium">
          <Plus />
          <span className="ml-2">Create</span>
        </button>
        <Bell />

        <img
          className="rounded-full"
          width={40}
          alt="user-photo"
          src={userPhotoUrl}
        />
      </div>
    </div>
  );
};

export default Header;
