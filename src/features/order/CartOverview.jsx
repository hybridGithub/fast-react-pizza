import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>Rs. 445</span>
      </p>
      <Link to="/cart">Open Cart</Link>
    </div>
  );
};

export default CartOverview;