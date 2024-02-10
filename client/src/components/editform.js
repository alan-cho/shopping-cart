import { useState } from "react";
const EditForm = ({
  id,
  prevTitle,
  prevPrice,
  prevQuantity,
  onToggleForm,
  onSubmit,
}) => {
  [title, setTitle] = useState(prevTitle);
  [price, setPrice] = useState(prevPrice);
  [quantity, setQuantity] = useState(prevQuantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { title, price, quantity };
    onSubmit(updatedProduct, id);
    onToggleForm();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={() => onToggleForm()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
