import { Menu, Bell, Search, Plus } from "lucide-react";
import { userPhotoUrl } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-flow-col px-4 m-2 shadow-lg">
      <div className="flex gap-6 col-span-2 items-center">
        <button onClick={() => dispatch(toggleMenu())}>
          <Menu />
        </button>
        <img src="/youtube-logo.jpg" alt="youtube logo" width={110} />
      </div>
      <div className="flex p-2 col-span-8 items-center">
        <input
          type="text"
          className="w-[80%] border rounded-l-full p-2 border-gray-400"
        />
        <div className="border border-gray-400 py-2 px-4 ml-[-1px] rounded-r-full">
          <Search />
        </div>
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
