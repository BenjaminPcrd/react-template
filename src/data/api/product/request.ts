const url = "https://dummyjson.com";

export const getProducts = async () => {
  const res = await fetch(`${url}/products`);
  const data = await res.json();
  return data.products;
};

export const getProduct = async (id: number) => {
  const res = await fetch(`${url}/product/${id}`);
  const data = await res.json();
  return data;
};
