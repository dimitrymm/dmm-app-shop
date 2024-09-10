import { formatDate } from "./FormatDate";

export const filterByMonth = (products, searchDate) => {
  return products.filter((product) => {
    const formattedDate = formatDate(product.date);

    // console.log(
    //   `Original Date: ${product.date}, Formatted Date: ${formattedDate}`
    // );

    if (!formattedDate) {
      console.log(`Invalid date format for product: ${product.nome}`);
      return false;
    }
    // const productMonth = new Date(formattedDate).getMonth() + 1;
    const [year, month, day] = formattedDate.split("-"); // Divide o formato YYYY-MM-DD

    // console.log(`Product Month: ${month}, Filter Month: ${searchDate}`);

    return Number(month) === Number(searchDate); // Compara os meses como números
  });
};
