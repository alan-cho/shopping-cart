import Product from "./product";

const ProductListing = ({
  products,
  onHandleAddItem,
  onHandleDeleteProduct,
  onUpdateSubmit,
}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product, index) => (
          <Product
            key={index}
            id={product._id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            onHandleAddItem={onHandleAddItem}
            onHandleDeleteProduct={onHandleDeleteProduct}
            onUpdateSubmit={onUpdateSubmit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
