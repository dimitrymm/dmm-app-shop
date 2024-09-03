import React, { useEffect, useState } from "react";
import CategoriesService from "../../services/CategoriesService";

import trash from "../../assets/icons/trash (1).svg";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();
        setCategories(categoriesList);
      } catch (error) {
        console.log("error", error);
      }
    }
    loadCategories();
  }, []);

  return (
    <aside className="flex-col p-2  rounded-md h-full">
      <h1 className="text-center">Categorias</h1>
      <div className="flex justify-center m-1">
        <div>
          <span>Data:</span>
          {categories.map((category) => (
            <div key={category.id} className=" ">
              <p className=" px-2 border border-gray-900 rounded-md hover:border-r-2 hover:border-b-2">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        <div>
          <span>Excluir</span>
          {categories.map((category) => (
            <div key={category.id} className="">
              <button className=" ">
                <img
                  className="ml-4   fill-inherit text-red-600 h-5"
                  src={trash}
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
