import Header from "./header";
import Main from "./main";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/products";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  // Adds item to shopping cart
  const handleAddItem = (productId) => {
    let product = products.find((product) => product._id === productId);
    setCartItems([...cartItems, product]);
  };

  // Adds product to database and store
  const handleAddSubmit = async (newProduct, callback) => {
    try {
      const data = await addProduct(newProduct);
      setProducts([...products, data]);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Updates product in database and store
  const handleUpdateSubmit = async (updatedProduct, productId) => {
    try {
      const data = await updateProduct(updatedProduct, productId);

      let product = products.find((product) => product._id === productId);
      let productsCopy = products.slice();
      productsCopy.splice(productsCopy.indexOf(product), 1);
      setProducts([...productsCopy, data]);
    } catch (e) {
      console.log(e);
    }
  };

  // Removes product from database and store
  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);

      let product = products.find((product) => product._id === productId);
      let productsCopy = products.slice();
      productsCopy.splice(productsCopy.indexOf(product), 1);
      setProducts([...productsCopy]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} />
      <Main
        products={products}
        onHandleAddItem={handleAddItem}
        onHandleDeleteProduct={handleDeleteProduct}
        onAddSubmit={handleAddSubmit}
        onUpdateSubmit={handleUpdateSubmit}
      />
    </div>
  );
};

export default App;
