import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const addProduct = async (newProduct) => {
  const { data } = await axios.post("/api/products", { ...newProduct });
  return data;
};

export const updateProduct = async (updatedProduct, productId) => {
  const { data } = await axios.put(`/api/products/${productId}`, {
    ...updatedProduct,
  });
  return data;
};

export const deleteProduct = async (productId) => {
  await axios.delete(`/api/products/${productId}`);
};
