import SearchForm from "../components/forms/SearchForm";
import TaskList from "../components/lists/TasksList";
import AddTaskBtn from "../components/buttons/AddTaskBtn";
import FilterNavbar from "../components/headers/FilterNavbar";
import BarLoader from "../components/motion/BarLoader";
import { useEffect, useState } from "react";

const HomeView = () => {
  const [tasksList, setTasksList] = useState([]);
  const [loading, setLoadingState] = useState(true);

  const getTaskList = async () => {
    await fetch("http://localhost:3030/tasks", {
      method: "GET",
    })
      .then(async (res) => {
        setTasksList(await res.json());
        setTimeout(() => {
          setLoadingState(false);
        }, 1000);
      })
      .catch((err) => {
        console.log("An Error occured= ", err);
      });
  };
  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <>
      <SearchForm />
      <FilterNavbar />
      <div className="body container px-4 pb-4 pt-0 mt-0">
        {loading ? (
          <>
            <BarLoader />
          </>
        ) : (
          <TaskList tasks={tasksList} />
        )}
      </div>
      <span className="line border-top d-block mx-4"></span>
      <div className="footer container px-4 pt-3 py-4">
        <span className="fw-normal  d-flex align-items-top gap-2">
          <span className="bi-people fs-3"></span>
          <span className="min-opacity">
            Recent task are listed here,
            <span className="fw-semibold opacity-100"> click </span>
            on a task to view, <br />
            edit or delete...
          </span>
        </span>
      </div>
      <AddTaskBtn />
    </>
  );
};

export default HomeView;
