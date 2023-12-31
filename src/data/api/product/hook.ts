import { useQuery } from "react-query";
import { getProducts, getProduct } from "./request";
import { ProductModel, ProductCollection } from "../model/product";

export const useProducts = () =>
  useQuery<ProductCollection>("products", () => getProducts());

export const useProduct = (id: number) =>
  useQuery<ProductModel>("product", () => getProduct(id));
