import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {products.slice(0, 10).map(product => (
          <div key={product.id}>
            <img src={product.images[0]} alt={product.title} width="100" />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={'/product/${product.id}'}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;