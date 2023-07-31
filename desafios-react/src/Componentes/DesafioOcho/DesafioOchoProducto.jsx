
const DesafioOchoProducto = ({title,description,price,image}) => {
  return (
    <div className="card" style={{ width: "22%"}}>
      <img src={image} className="card-img-top" alt="Lorem ipsum" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
      </div>
    </div>
  );
};

export default DesafioOchoProducto;
