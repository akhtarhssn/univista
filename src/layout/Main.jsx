import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  // Determine if the current route is the home page

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
