import {useState,useEffect} from 'react'
import DesafioOchoProducto from './DesafioOchoProducto'
import "./DesafioContenedor.css"


const DesafioOchoContenedor = () => {
    const [loading,setLoading] = useState(true)
    const [productos,setProductos] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            setProductos(res.products)
            setLoading(false)
          });
    } 
    ,[])

    console.log(productos)

  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      { loading ? 
      <h1>Loading</h1> 
      :
      productos.map(producto => ( <DesafioOchoProducto key={producto.id} title={producto.title} description={producto.description} price={producto.price} image={producto.images[0]}/>))
       }
    
    </div>
  )
}

export default DesafioOchoContenedor