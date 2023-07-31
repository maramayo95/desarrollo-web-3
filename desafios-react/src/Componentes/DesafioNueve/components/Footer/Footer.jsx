import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col division">
          <h3>Seguinos</h3>
          <ul>
            <li>
              {" "}
              <i className="fa-brands fa-facebook-f"></i> Facebook
            </li>
            <li>
              {" "}
              <i className="fa-brands fa-instagram"></i> Instagram
            </li>
            <li>
              {" "}
              <i className="fa-brands fa-linkedin-in"></i> Linkedin
            </li>
            <li>
              {" "}
              <i className="fa-brands fa-youtube"></i> Youtube
            </li>
          </ul>
        </div>

        <div className="col division">
          <h3>Otros servicios</h3>
          <ul>
            <li>MercadoLiebre Pagos</li>
            <li>MercadoLiebre Shops</li>
            <li>MercadoLiebre Envios</li>
          </ul>
        </div>

        <div className="col division">
          <h3>Trabaja con nosotros</h3>
          <form className="row g-3">
            <div className="col-auto">
              <label
                htmlFor="inputPassword2"
                className="visually-hidden"
              ></label>
              <input
                type="email"
                className="form-control"
                id="inputPassword2"
                placeholder="Ingresa tu mail"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
