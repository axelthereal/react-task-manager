import AddTaskBtn from "../components/buttons/AddTaskBtn";
import { Task, TaskState } from "../data/TasksTypes";
import UrgentBtn from "../components/buttons/UrgentBtn";

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
      <div className="body container px-4 py-4">
        <h5 className="opacity-80 fw-semibold">{task.title}</h5>
        <p className="fw-medium fs-6 text-muted opacity-75 mt-2">
          {task.description}
        </p>

        <div className="minfooter w-100 d-flex align-items-center justify-content-between mt-5">
          {task.urgent && <UrgentBtn />}

          <div className="d-flex align-items-center justify-content-between gap-3">
            <button className="btn btn-primary rounded-pill bg-primary-subtle  fw-semibold text-primary-emphasis border border-1 border-primary">
              <span className="bi-pen"></span> Edit...
            </button>
            <button className="btn btn-danger rounded-pill bg-white text-danger fw-semibold border border-1 border-danger">
              <span className="bi-trash"></span> Delete Task
            </button>
          </div>
        </div>
      </div>

      <span className="line border-top d-block mx-3"></span>
      <div className="footer container px-3 pt-3 py-4 d-flex align-items-center justify-content-between">
        <span className="fw-normal  d-flex align-items-top gap-2 w-50">
          <span className="bi-people fs-3"></span>
          <span className="min-opacity">
            This task data can be modified or deleted.
          </span>
        </span>

        <button className="btn btn-success border-0 rounded-pill d-flex align-items-center gap-2">
          <span className="bi-check2-all fs-5"></span>
          Mark Task as done
        </button>
      </div>
      <AddTaskBtn />
    </>
  );
};

export default TaskView;
