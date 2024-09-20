import FormatDate from './FormatDate';

export const filterByMonth = (products, searchDate) => {
    return products.filter((product) => {
        const formattedDate = FormatDate(product.date);

        if (!formattedDate) {
            console.log(`Invalid date format for product: ${product.nome}`);
            return false;
        }

        const [year, month, day] = formattedDate.split('/'); // Divide o formato YYYY-MM-DD

        return Number(month) === Number(searchDate); // Compara os meses como números
    });
};
