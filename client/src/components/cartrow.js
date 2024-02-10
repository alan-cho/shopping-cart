const CartRow = ({ title, quantity, price }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  );
};

export default CartRow;
