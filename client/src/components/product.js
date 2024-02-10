import EditForm from "./editform";
import { useState } from "react";

const Product = ({
  id,
  title,
  price,
  quantity,
  onHandleAddItem,
  onHandleDeleteProduct,
  onUpdateSubmit,
}) => {
  [displayEdit, setDisplayEdit] = useState(false);
  const toggleForm = () => {
    if (displayEdit) {
      setDisplayEdit(false);
    } else {
      setDisplayEdit(true);
    }
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} Left in Stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={() => onHandleAddItem(id)}>
            Add to Cart
          </button>
          <button className="edit" onClick={() => toggleForm()}>
            Edit
          </button>
          {displayEdit && (
            <EditForm
              onToggleForm={toggleForm}
              onSubmit={onUpdateSubmit}
              id={id}
              prevTitle={title}
              prevPrice={price}
              prevQuantity={quantity}
            />
          )}
        </div>
        <button
          className="delete-button"
          onClick={() => onHandleDeleteProduct(id)}
        >
          <span>X</span>
        </button>
      </div>
    </li>
  );
};

export default Product;
