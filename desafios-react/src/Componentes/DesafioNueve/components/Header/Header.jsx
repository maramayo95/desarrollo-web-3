import logo from "../assets/mercado-liebre.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex">
          <img src={logo} alt="Logo de mercado liebre" className="logo" />

          <p>
            {" "}
            <i className="fa-regular fa-hand-holding-dollar"></i> Todas las
            opiniones en un solo lugar
          </p>
        </div>
        <div className="flex">
          <p>Todos los productos</p>
          <span className="flex">
            <p className="espacio btn btn-primary">
              Crea tu cuenta <i className="fa-regular fa-address-card"></i>{" "}
            </p>
            <p></p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Ingresa <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Registrate
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
