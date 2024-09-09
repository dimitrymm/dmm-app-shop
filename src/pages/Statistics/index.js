import { useState } from "react";

import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";

export default function Statistics() {
  const [searchDate, setSearchDate] = useState(undefined);
  const [isGroupedListOpen, setIsGroupedListOpen] = useState(false);

  function handleSearchDate(event) {
    setSearchDate(Number(event.target.value));
  }

  function handleOpenGroupedList(event) {
    !isGroupedListOpen
      ? setIsGroupedListOpen(true)
      : setIsGroupedListOpen(false);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center  p-2 shadow-md shadow-slate-600 rounded-md w-full max-w-2xl">
        <nav>
          <select
            value={searchDate}
            onChange={handleSearchDate}
            className="p-1 border border-gray-900 rounded-md"
          >
            <option value="">Todos</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>

          <label
            htmlFor="grouped"
            className="p-1 ml-1 border border-black rounded-md"
          >
            Agrupar Produtos?
            <input
              value={isGroupedListOpen}
              onClick={handleOpenGroupedList}
              type="checkbox"
              name="grouped"
              className="ml-1"
            />
          </label>
        </nav>

        <div className="w-full">
          <ProductList
            isGroupedListOpen={isGroupedListOpen}
            searchDate={searchDate}
          />
        </div>
        <CategoryList />
      </div>
    </div>
  );
}
