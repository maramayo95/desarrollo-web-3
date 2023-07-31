import {useState,useEffect} from 'react'
import DesafioSieteProducto from './DesafioSieteProducto'

const DesafioSiete = () => {
    const [loading,setLoading] = useState(false)
    const [producto,setProducto] = useState({})

    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(res => {
            setProducto(res)
            setLoading(true)
          });
    } 
    ,[])
  
  return (
    <div>
      { loading && <DesafioSieteProducto title={producto.title} description={producto.description} price={producto.price} image={producto.images[0]}/>  }
    
    </div>
  )
}

export default DesafioSiete