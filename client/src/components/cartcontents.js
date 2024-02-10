import CartRow from "./cartrow";

const CartContents = ({ isEmpty, cartItems }) => {
  const price = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  };
  if (isEmpty) {
    return (
      <div>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
      </div>
    );
  } else {
    return (
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <CartRow
              key={index}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total">
              Total: ${price()}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
};

export default CartContents;
