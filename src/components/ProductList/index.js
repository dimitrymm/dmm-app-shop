import { useCallback, useEffect, useState } from 'react';
import trash from '../../assets/icons/trash (1).svg';
import PropTypes from 'prop-types';
import FormatDate from '../../utils/FormatDate';

import ProductsService from '../../services/ProductsService';
import { filterByMonth } from '../../utils/FilterByMonth';

export default function ProductList(props) {
    const [products, setProducts] = useState([]);
    const [totalQuantities, setTotalQuantities] = useState({});

    const calculateTotalQuantities = (productList) => {
        const productQuantities = {};

        productList.forEach((product) => {
            if (productQuantities[product.name]) {
                productQuantities[product.name] += product.quantity;
            } else {
                productQuantities[product.name] = product.quantity;
            }
        });
        return productQuantities;
    };

    const loadProducts = useCallback(async () => {
        try {
            const productList = await ProductsService.listProducts();
            setProducts(productList);
            const quantities = calculateTotalQuantities(productList);
            setTotalQuantities(quantities);
        } catch (error) {
            console.log('error', error);
        }
    }, []);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    const filteredProducts = props.searchDate
        ? filterByMonth(products, props.searchDate)
        : products;

    const groupedProducts = products;

    const monthNames = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    const monthIndex = parseInt(props.searchDate, 10) - 1;
    const monthName = monthNames[monthIndex] || 'Data inválida';

    return (
        <aside className="flex-col p-2">
            <h1 className="text-center">Compras Listadas</h1>
            <div className="">
                <div className="">
                    {filteredProducts <= 0 ? (
                        <h1 className="rounded-md border border-gray-900 text-center">
                            Não possui produtos neste mes de {monthName}
                        </h1>
                    ) : (
                        filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="m-1 rounded-md border border-black p-1 hover:border-b-2 hover:border-r-2"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="">
                                            <strong className="">
                                                {product.name}
                                            </strong>
                                            <span className="ml-1 font-bold uppercase text-blue-700">
                                                {product.category_name}
                                            </span>
                                        </div>
                                        <div className="">
                                            <span className="">
                                                {product.quantity} Un.
                                            </span>
                                            <span className=" ">
                                                Em: {FormatDate(product.date)}
                                            </span>
                                        </div>
                                    </div>
                                    <button className=" ">
                                        <img
                                            src={trash}
                                            alt="Excluir"
                                            className=""
                                        />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    <div className="flex">
                        {Object.entries(totalQuantities).map(
                            ([name, quantity]) => (
                                <div
                                    key={name}
                                    className="m-1 flex rounded-md border border-black p-1 hover:border-b-2 hover:border-r-2"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <div className="">
                                                <strong className="">
                                                    {name}
                                                </strong>
                                            </div>
                                            <div className="">
                                                <span className="">
                                                    {quantity} Un.
                                                </span>
                                            </div>
                                        </div>

                                        <button className=" ">
                                            <img
                                                src={trash}
                                                alt="Excluir"
                                                className="ml-4"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}

ProductList.propTypes = {
    searchDate: PropTypes.string,
    isGroupedListOpen: PropTypes.bool,
};
