import { useState } from "react";
import CategoryForm from "../../components/CategoryForm";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
  }
  return (
    <div className="flex justify-center">
      <CategoryForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div>
        <div className="max-w-2xl mx-1 mb-3 shadow-md shadow-slate-600 rounded-md ">
          <ProductForm />
          <button
            onClick={handleOpenModal}
            className="hover:underline font-bold mr-1"
          >
            Adicionar Categoria
          </button>
        </div>
        <div className=" max-w-2xl mx-1 mb-3 shadow-md shadow-slate-600 rounded-md">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
