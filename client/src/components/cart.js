import CartContents from "./cartcontents";

const Cart = ({ cartItems }) => {
  let isEmpty;
  if (cartItems.length === 0) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <CartContents isEmpty={isEmpty} cartItems={cartItems} />
      <button className="checkout" disabled>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
