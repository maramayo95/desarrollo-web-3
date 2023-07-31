
const DesafioCinco = ({subtitulo,descripcion,imagen}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={imagen} className="card-img-top" alt="Lorem ipsum"/>
        <div className="card-body">
        <h5 className="card-title">{subtitulo}</h5>
        <p className="card-text">{descripcion}</p>
    </div>
</div>
  )
}

export default DesafioCinco