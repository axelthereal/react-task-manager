import { Link } from "react-router-dom";

const AddTaskBtn = () => {
  return (
    <>
      <Link to="/add-task">
        <button className="btn btn-primary shadow-lg btn-add-task align-items-center justify-content-center d-flex btn-lg">
          <span className="bi-plus-lg"></span>
        </button>
      </Link>
    </>
  );
};

export default AddTaskBtn;
