import { useState } from "react";

const AddForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleOpenForm = () => {
    const form = document.getElementsByClassName("add-form")[0];
    if (form.classList.contains("visible")) {
      form.classList.remove("visible");
    } else {
      form.classList.add("visible");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title, price, quantity };
    onSubmit(newProduct, resetForm);
  };

  const resetForm = () => {
    setTitle("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div className="add-form">
      <p>
        <button className="add-product-button" onClick={() => handleOpenForm()}>
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={() => handleOpenForm()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
