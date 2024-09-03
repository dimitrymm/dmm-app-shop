import { parse, getMonth } from "date-fns";

export const filterByMonth = (products, month) => {
  return products.filter((product) => {
    const productDate = parse(product.date, "yyyy/MM/dd", new Date());

    return getMonth(productDate) + 1 === month;
  });
};
