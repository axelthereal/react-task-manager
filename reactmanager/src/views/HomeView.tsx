import AppCard from "../components/cards/AppCard";
import Navbar from "../components/headers/Navbar";

const HomeView = () => {
  return (
    <>
      <AppCard>
        <Navbar />
        <div className="body container px-3">
          <h1>Home</h1>
        </div>
      </AppCard>
    </>
  );
};

export default HomeView;
