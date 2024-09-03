import { useState } from "react";

import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";

export default function Statistics() {
  const [searchDate, setSearchDate] = useState("");

  function handleSearchDate(event) {
    setSearchDate(event.target.value);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center  p-2 shadow-md shadow-slate-600 rounded-md w-full max-w-2xl">
        <nav>
          <select
            value={searchDate}
            onChange={handleSearchDate}
            className="px-1 border border-gray-900 rounded-md"
          >
            <option value="">Todos</option>
            <option value="01">Janeiro</option>
            <option value="02">Fevereiro</option>
            <option value="03">Março</option>
            <option value="04">Abril</option>
            <option value="05">Maio</option>
            <option value="06">Junho</option>
            <option value="07">Julho</option>
            <option value="08">Agosto</option>
            <option value="09">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </nav>
        {/* <div className="">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="flex mt-1">
                <div className="border w-28 border-black px-1 rounded-md">
                  {product.date}
                </div>
                <div className="border w-28 border-black  px-1 rounded-md">
                  {product.name}
                </div>
                <div className="border w-28 border-black px-1 rounded-md">
                  {product.quantity}
                </div>
                <div className="border w-28 border-black px-1 rounded-md">
                  {product.category_name}
                </div>
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div> */}
        <div className="w-full">
          <ProductList searchDate={searchDate} />
        </div>
        <CategoryList />
      </div>
    </div>
  );
}
