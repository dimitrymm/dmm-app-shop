import { formatDate } from "date-fns";

export const filterByMonth = (products, searchDate) => {
  return products.filter((product) => {
    const formattedDate = formatDate(product.date);

    console.log(
      `Original Date: ${product.date}, Formatted Date: ${formattedDate}`
    );

    if (!formattedDate) {
      console.log(`Invalid date format for product: ${product.nome}`);
      return false;
    }
    const productMonth = new Date(formattedDate).getMonth() + 1;

    console.log(`Product Month: ${productMonth}, Filter Month: ${searchDate}`);

    return productMonth === searchDate;
  });
};
