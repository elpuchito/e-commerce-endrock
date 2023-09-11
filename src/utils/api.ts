import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export const getProduct = (id: number) => {
  return axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
};

export const getProducts = () => {
  return axios.get<Product[]>("https://fakestoreapi.com/products");
};
