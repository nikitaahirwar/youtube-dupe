import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";

const Body = () => {
  return (
    <div className="p-2">
      <Header />
      <div className="flex">
        <NavBar />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;
