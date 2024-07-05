import AppCard from "../components/cards/AppCard";
import Navbar from "../components/headers/Navbar";
import SearchForm from "../components/forms/SearchForm";
import TaskList from "../components/lists/TasksList.jsx";

const HomeView = () => {
  return (
    <>
      <AppCard>
        <Navbar />
        <SearchForm />
        <div className="body container px-3 py-4">
          <h5 className="opacity-80 fw-semibold">Tasks added recently</h5>
          <TaskList />
        </div>
      </AppCard>
    </>
  );
};

export default HomeView;
