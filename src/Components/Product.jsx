import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../App/features/cartSlice";
import { productsApi } from "../App/features/ProductSlice";

function Product() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productsApi());
  }, []);

  const handleChnage = (products) => {
    dispatch(add(products));
  };
  if (isLoading === true) {
    return <h3>loading.....</h3>;
  }
  return (
    <div className="productsWrapper">
      {products !== null &&
        products.map((products) => (
          <div className="card" key={products.id}>
            <img src={products.image} alt="logo" />
            <h4>{products.title}</h4>
            <h5>{products.price}</h5>
            <button className="btn" onClick={() => handleChnage(products)}>
              Add to cart
            </button>
          </div>
        ))}
    </div>
  );
}

export default Product;
