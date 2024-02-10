import ProductListing from "./productlisting";
import AddForm from "./addform";

const Main = ({
  products,
  onHandleAddItem,
  onHandleDeleteProduct,
  onAddSubmit,
  onUpdateSubmit,
}) => {
  return (
    <main>
      <ProductListing
        products={products}
        onHandleAddItem={onHandleAddItem}
        onHandleDeleteProduct={onHandleDeleteProduct}
        onUpdateSubmit={onUpdateSubmit}
      />
      <AddForm onSubmit={onAddSubmit} />
    </main>
  );
};

export default Main;
