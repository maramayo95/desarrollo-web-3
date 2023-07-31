import "./Products.css";
import useMeliData from "../app/useMeliData";
import Product from "../Product/Product";

const Products = () => {
  const { data } = useMeliData();
  const results = data.results;
  return (
    <>
      <h1 className="text-center mt-5"> Nuestros Productos</h1>
      <div className="container group-grid my-5 gap-3">
        {results?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
