import { Link } from "react-router-dom";
import CancelBtn from "../buttons/CancelBtn";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-default bg-white">
          <div className="container px-4 pt-3">
            <Link className="navbar-brand logo fs-3 fw-semibold" to="/home">
              React Manager
            </Link>

            <CancelBtn />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
