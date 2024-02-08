import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
const cart = useSelector((state)=>state.cart)
  return (
    <>
    {console.log(cart)}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span className="logo">Redux Toolkit</span>
        </div>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <span className="cartCount">Cart item: {cart.length}</span>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
