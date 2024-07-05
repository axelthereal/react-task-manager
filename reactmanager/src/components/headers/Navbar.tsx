const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-default bg-white">
          <div className="container px-3 pt-3">
            <a className="navbar-brand logo" href="#">
              ReactManager
            </a>

            <ul className="navbar-nav gap-2">
              <li className="nav-item fw-semibold task-nav">
                <a
                  className="nav-link py-1 px-3 active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item fw-semibold task-nav">
                <a className="nav-link py-1 px-3" href="#">
                  All
                </a>
              </li>
              <li className="nav-item fw-semibold task-nav">
                <a className="nav-link py-1 px-3" href="#">
                  Pending
                </a>
              </li>
              <li className="nav-item fw-semibold task-nav">
                <a className="nav-link py-1 px-3" href="#">
                  Done
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
