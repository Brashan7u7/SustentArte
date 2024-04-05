import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container">
          <Image src="/Logo.jpeg" alt="ImagenCarrousell" width={110} height={80} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto flex-lg-row flex-column navItems">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/"
                  aria-current="page"
                >
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/Nosotros"
                  aria-current="page"
                >
                  ¿Quienes Somos?
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  aria-current="page"
                >
                  Productos
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <button
                    type="button"
                    className={styles.logout}
                >
                    Iniciar Sesion
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossOrigin="anonymous"
      ></script> 
    </div>
  );
};

export default Navbar;
