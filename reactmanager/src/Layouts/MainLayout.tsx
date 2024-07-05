import { Outlet } from "react-router-dom";
import Navbar from "../components/headers/Navbar";
import AppCard from "../components/cards/AppCard";

const MainLayout = () => {
  return (
    <>
      <AppCard>
        <Navbar />
        <Outlet />
      </AppCard>
    </>
  );
};

export default MainLayout;
