let productos = [
    {
      id: 1,
      nombre: "Play Station 5",
      precio: 120000,
      stock: true,
      descripcion: "Lorem ipsum sit amet"
    },
    {
      id: 2,
      nombre: "Xbox 360",
      precio: 150000,
      stock: true,
      descripcion: "Lorem ipsum sit amet"
    },
    {
      id: 3,
      nombre: "Nintendo Switch",
      precio: 130000,
      stock: true,
      descripcion: "Lorem ipsum sit amet"
    },
    {
      id: 4,
      nombre: "Xbox Series X",
      precio: 160000,
      stock: true,
      descripcion: "Lorem ipsum sit amet"
    }
  ];

  let nuevoProducto = 
    {
        id: 5,
        nombre: "Pc Gamer MSI",
        precio: 160000,
        stock: true,
        descripcion: "Lorem ipsum sit amet"
    }
    




const productosSpread = [...productos,nuevoProducto]

productosSpread.map(producto => console.log(producto))




