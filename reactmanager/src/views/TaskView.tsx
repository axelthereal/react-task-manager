import { useParams } from "react-router-dom";
import UrgentBtn from "../components/buttons/UrgentBtn";
import ReturnBtn from "../components/buttons/ReturnBtn";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { taskObject } from "../data/TasksTypes";

const TaskView = () => {
  const { id } = useParams();
  const [task, setTask] = useState(taskObject);

  const getTask = async () => {
    await fetch(`http://localhost:3030/tasks/${id}`, {
      method: "GET",
    })
      .then(async (res) => {
        setTask(await res.json());
      })
      .catch((err) => {
        console.log("An Error occured= ", err);
      });
  };

  useEffect(() => {
    getTask();
  }, []);

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
            <Link to={`/edit-task/2`}>
              <button className="btn btn-primary rounded-pill bg-primary-subtle  fw-semibold text-primary-emphasis border border-1 border-primary">
                <span className="bi-pen"></span> Edit Task
              </button>
            </Link>
            <button className="btn btn-danger rounded-pill bg-white text-danger fw-semibold border border-1 border-danger">
              <span className="bi-trash"></span> Delete
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
          Mark as done
        </button>
      </div>
      <ReturnBtn />
    </>
  );
};

export default TaskView;
