
import DesafioCuatro from './Componentes/DesafioCuatro'
import DesafioCinco from './Componentes/DesafioCinco'

//Utilidad para desafio Cinco
import {productoUno, productoDos} from './utils/desafioCinco'
import DesafioSeis from './Componentes/DesafioSeis'
import DesafioSiete from './Componentes/DesafioSiete/DesafioSieteContenedor'
import DesafioOchoContenedor from './Componentes/DesafioOcho/DesafioOchoContenedor'
import DesafioNueve from './Componentes/DesafioNueve/DesafioNueve'
import DesafioDiez from './Componentes/DesafioDiez/DesafioDiez'
function App() {

  return (
    <>
      {/* ---------- */}
          {/* <DesafioCuatro/> */}
      {/* ---------- */}

      
      {/* ---------- */}
         {/* <DesafioCinco subtitulo={productoUno.subtitulo} descripcion={productoUno.descripcion} imagen={productoUno.imagen}/>  */}
         {/* <DesafioCinco subtitulo={productoDos.subtitulo} descripcion={productoDos.descripcion} imagen={productoDos.imagen}/>  */}
      {/* ---------- */}

      {/* ---------- */}
        {/* <DesafioSeis/> */}
      {/* ---------- */}

      {/* --------------- */}
        {/* <DesafioSiete/> */}
      {/* ------------- */}

      {/* -----------------  */}
          {/* <DesafioOchoContenedor/> */}
      {/* ------------------- */}

        {/* ------------------ */}
        {/* <DesafioNueve/> */}
      {/* ------------------- */}

      {/* -------------- */}
        <DesafioDiez/>
      {/* -------------- */}
  |   
  </>

  )
}

export default App
