import { Link, Outlet } from "react-router-dom";
import CardScreen from "../CardScreen";
import { AiFillHome } from "react-icons/ai";
import { TooltipContainer } from "@/components/ui/Tip";
import { useEffect } from "react";
import { justGet } from "@/API/Api";

const Layout = () => {
  useEffect(() => {
    justGet();
  }, []);
  return (
    <div className="mx-2 md:mx-20 mt-0 flex flex-col min-h-screen relative ">
      <div className="flex-1 flex items-center justify-center ">
        <Outlet />
      </div>
      <TooltipContainer title="Go Back Home">
        <Link to="/" className="absolute top-16 right-5 text-[40px]">
          <AiFillHome />
        </Link>
      </TooltipContainer>

      <CardScreen />
    </div>
  );
};

export default Layout;
