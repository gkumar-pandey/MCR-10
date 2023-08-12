export const sortData = (data, type) => {
  if (type === "price") {
    return data.sort((a, b) => a.price - b.price);
  }

  if (type === "stock") {
    return data.sort((a, b) => a.stock - b.stock);
  }
};
