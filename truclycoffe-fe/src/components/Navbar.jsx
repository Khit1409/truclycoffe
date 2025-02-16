import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg rounded">
      <div className="container-fluid">
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/truclycoffe/about">
                ABOUTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/truclycoffe/coffe_page">
                COFFE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/truclycoffe/reviewformuser">
                REVIEW
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/truclycoffe/blog">
                BLOG
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SHOP
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/truclycofee/foodshop">
                    FOOD
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/truclycoffe/drinkshop">
                    DRINKS
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/truclycoffe/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
