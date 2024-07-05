import AppCard from "../components/cards/AppCard";
import Navbar from "../components/headers/Navbar";
import SearchForm from "../components/forms/SearchForm";

const HomeView = () => {
  return (
    <>
      <AppCard>
        <Navbar />
        <SearchForm />
        <div className="body container px-3">
          <h1>Home</h1>
        </div>
      </AppCard>
    </>
  );
};

export default HomeView;
