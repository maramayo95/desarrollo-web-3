import { useState, useEffect } from "react";

const useMeliData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=xbox";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return {
    data
  };
};

export default useMeliData;
