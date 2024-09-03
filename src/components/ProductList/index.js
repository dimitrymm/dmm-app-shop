import React, { useEffect, useMemo, useState } from "react";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import trash from "../../assets/icons/trash (1).svg";
import PropTypes from "prop-types";

import ProductsService from "../../services/ProductsService";

export default function ProductList({ searchDate }) {
  const [productNew, setProductNew] = useState([]);
  const esteSearchDate = "";

  useEffect(() => {
    async function loadProducts() {
      try {
        const productList = await ProductsService.listProducts();
        setProductNew(productList);
      } catch (error) {
        console.log("error", error);
      }
    }
    loadProducts();
  }, []);

  const filteredProducts = useMemo(
    () =>
      productNew.filter((product) =>
        product.date.includes(!searchDate ? esteSearchDate : searchDate)
      ),
    [productNew, esteSearchDate, searchDate]
  );

  console.table(filteredProducts);
  return (
    <aside className="flex-col ">
      <h1 className="text-center">Compras Listadas</h1>

      <div className="">
        <div className="">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-black rounded-md m-1 p-1 max-w-full hover:border-r-2 hover:border-b-2"
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
  searchDate: PropTypes.string,
};
