const FilterNavbar = () => {
  return (
    <>
      <div className="container px-4 mt-4">
        <h5 className="opacity-80 fw-semibold">Tasks added recently</h5>
        <ul className="nav d-flex gap-3 mt-2 mb-4">
          <li className="nav-item d-block fw-semibold task-nav">
            <a
              className="nav-link py-1 px-3 active"
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item d-block fw-semibold task-nav">
            <a className="nav-link py-1 px-3" href="#">
              All
            </a>
          </li>
          <li className="nav-item d-block fw-semibold task-nav">
            <a className="nav-link py-1 px-3" href="#">
              Pending
            </a>
          </li>
          <li className="nav-item d-block fw-semibold task-nav">
            <a className="nav-link py-1 px-3" href="#">
              Done
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterNavbar;
