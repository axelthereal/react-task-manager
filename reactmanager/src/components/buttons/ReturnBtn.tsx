import { Link } from "react-router-dom";

const ReturnBtn = () => {
  return (
    <>
      <Link to="/home">
        <button className="btn btn-primary shadow-lg return-btn align-items-center justify-content-center d-flex btn-lg">
          <span className="bi-arrow-left"></span>
        </button>
      </Link>
    </>
  );
};

export default ReturnBtn;
