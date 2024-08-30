import React from "react";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import x from "../../assets/icons/x.svg";
import { useCategory } from "../../Context/DataProvider";

export default function ProductList() {
  const categories = useCategory();

  return (
    <aside className="backdrop-blur-lg  p-2 shadow-lg rounded-md w-full h-full max-w-40">
      <h1 className="text-center">Categorias</h1>
      <div className="flex m-1">
        <div>
          <span>Data:</span>
          {categories.map((category) => (
            <div key={category.id} className=" ">
              <p className="border px-2 bg-slate-500 ">{category.name}</p>
            </div>
          ))}
        </div>

        <div>
          <span>Excluir</span>
          {categories.map((category) => (
            <div key={category.id} className="">
              <button className=" ">
                <XIcon
                  className="ml-4   fill-inherit text-red-600 h-5"
                  src={x}
                  alt="X"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
