import { Task, TaskState } from "../data/TasksTypes";
import ReturnBtn from "../components/buttons/ReturnBtn";

const EditTaskView = () => {
  return (
    <>
      <div className="body container px-4 py-4 pt-2">
        <h5 className="opacity-80 fw-semibold">Edit Task</h5>
        <p className="fw-medium small text-muted opacity-75 mt-2">
          Modify a task by submiting the form and click on save button to
          continue and save the data.
        </p>

        <div className="form-group mt-2">
          <label htmlFor="title" className="fw-medium">
            Title
          </label>
          <input
            type="text"
            className="form-control mt-1 shadow-none lead fw-semibold"
            placeholder="Enter the task's title..."
            name=""
            id=""
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="description" className="fw-medium">
            Description
          </label>
          <textarea
            className="form-control shadow-none lead mt-2 fw-semibold"
            placeholder="description..."
            name=""
            id=""
          ></textarea>
        </div>
        <div className="form-group my-3 d-flex justify-content-between align-items-center">
          <div>
            <h6 className="fw-medium">Mark task as important</h6>
            <span className="fs-6 text-muted opacity-80 w-75 d-block">
              Set the task as important to be marked as an urgent task to
              complete
            </span>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={false}
            />
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
          Save changes
        </button>
      </div>
      <ReturnBtn />
    </>
  );
};

export default EditTaskView;
