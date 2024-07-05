import SearchForm from "../components/forms/SearchForm";
import TaskList from "../components/lists/TasksList";
import { Task, TaskState } from "../data/TasksTypes";
import AddTaskBtn from "../components/buttons/AddTaskBtn";
import FilterNavbar from "../components/headers/FilterNavbar";

const HomeView = () => {
  const testTasks: Task[] = [
    {
      id: 1,
      title: "Clean the leaving room and the parlor",
      description:
        "Do some cleaning in the leaving room and my parlor since its the weekend.",
      state: TaskState.Pending,
      urgent: false,
    },
    {
      id: 2,
      title: "Turn off cooker when food is ready",
      description:
        "Turn off the gas cooker when the diner is ready, don't forget to clean around to avoid dirts and bad odours",
      state: TaskState.Pending,
      urgent: true,
    },
    {
      id: 3,
      title: "Change the house bulbs",
      description: "Change all the used bulbs in the main rooms and outside.",
      state: TaskState.Done,
      urgent: false,
    },
  ];
  return (
    <>
      <SearchForm />
      <FilterNavbar />
      <div className="body container px-4 pb-4 pt-0 mt-0">
        <TaskList tasks={testTasks} />
      </div>
      <span className="line border-top d-block mx-4"></span>
      <div className="footer container px-4 pt-3 py-4">
        <span className="fw-normal  d-flex align-items-top gap-2">
          <span className="bi-people fs-3"></span>
          <span className="min-opacity">
            Recent task are listed here,
            <span className="fw-semibold opacity-100"> click </span>
            on a task to view, <br />
            edit or delete.
          </span>
        </span>
      </div>
      <AddTaskBtn />
    </>
  );
};

export default HomeView;
