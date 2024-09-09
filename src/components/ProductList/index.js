import React, { useEffect, useState } from "react";
import trash from "../../assets/icons/trash (1).svg";
import PropTypes from "prop-types";

import ProductsService from "../../services/ProductsService";
import { filterByMonth } from "../../utils/FilterByMonth";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productList = await ProductsService.listProducts();
        setProducts(productList);
      } catch (error) {
        console.log("error", error);
      }
    }
    loadProducts();
  }, []);

  const filteredProducts = props.searchDate
    ? filterByMonth(products, props.searchDate)
    : products;

  const groupByProductName = (products) => {
    const groupedProducts = products.reduce((acc, product) => {
      const { name } = product;
      if (!acc[name]) {
        acc[name] = { ...product, quantidade: 0 };
      }
      acc[name].quantity += product.quantity;
      return acc;
    }, {});
    return Object.values(groupedProducts);
  };
  const groupedProducts = groupByProductName(products);

  return (
    <aside className="flex-col p-2">
      <h1 className="text-center">Compras Listadas</h1>

      <div className="">
        <div className="">
          {props.isGroupedListOpen
            ? groupedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-black rounded-md m-1 p-1  hover:border-r-2 hover:border-b-2"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="">
                        <strong className="">{product.name}</strong>
                      </div>
                      <div className="">
                        <span className=""> {product.quantity} Un.</span>
                      </div>
                    </div>

                    <button className="  ">
                      <img src={trash} alt="Excluir" className="" />
                    </button>
                  </div>
                </div>
              ))
            : filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-black rounded-md m-1 p-1 hover:border-r-2 hover:border-b-2"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="">
                        <strong className="">{product.name}</strong>
                        <span className="ml-1  font-bold text-blue-700 uppercase">
                          {product.category_name}
                        </span>
                      </div>
                      <div className="">
                        <span className=""> {product.quantity} Un.</span>
                        <span className=" "> Em: {product.date}</span>
                      </div>
                    </div>

                    <button className="  ">
                      <img src={trash} alt="Excluir" className="" />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </aside>
  );
}

ProductList.propTypes = {
  searchDate: PropTypes.number,
  isGroupedListOpen: PropTypes.bool,
};
