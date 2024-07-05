import AppCard from "../components/cards/AppCard";
import Navbar from "../components/headers/Navbar";
import AddTaskBtn from "../components/buttons/AddTaskBtn";
import { Task, TaskState } from "../data/TasksTypes";

const TaskView = () => {
  const task: Task = {
    id: 2,
    title: "Turn off cooker when food is ready",
    description:
      "Turn off the gas cooker when the diner is ready, don't forget to clean around to avoid dirts and bad odours",
    state: TaskState.Pending,
    urgent: true,
  };

  return (
    <>
      <AppCard>
        <Navbar />
        <div className="body container px-4 py-4">
          <h5 className="opacity-80 fw-semibold">{task.title}</h5>
          <p className="fw-medium fs-6 text-muted opacity-75">
            {task.description}
          </p>

          <div className="minfooter"></div>
        </div>

        <span className="line border-top d-block mx-3"></span>
        <div className="footer container px-3 pt-3 py-4">
          <span className="fw-normal  d-flex align-items-center gap-2">
            <span className="bi-people fs-3"></span>
            <span className="min-opacity">
              This task data can be modified or deleted.
            </span>
          </span>
        </div>
      </AppCard>
      <AddTaskBtn />
    </>
  );
};

export default TaskView;
