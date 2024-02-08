import { useDispatch, useSelector } from "react-redux";
import { remove } from "../App/features/cartSlice";

function Cart() {
  const Items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (ProductId) => {
    dispatch(remove(ProductId));
  };
  return (
    <>
      <h3>cart</h3>
      <div className="cartWrapper">
        {
          Items !== undefined &&
            Items.map((product, idx) => (
              <div className="cartCard" key={product.id}>
                <img src={product.image} alt="logo" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button
                  className="btn"
                  onClick={() => handleRemove(product.id)}
                >
                  remove Item
                </button>
              </div>
            ))
          // {/*  */}
        }
      </div>
    </>
  );
}

export default Cart;
