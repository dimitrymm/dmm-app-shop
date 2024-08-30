import React from "react";

export default function CategoryForm() {
  return (
    <main className=" backdrop-blur-3xl p-5 shadow-lg rounded-md mx-5 mb-5 flex justify-center">
      <form className="text-black">
        <input className="py-2 mx-1" />

        <button
          className="p-2 rounded-md mt-1 border border-gray-950"
          type="submit"
        >
          Adicionar Categoria
        </button>
      </form>
    </main>
  );
}
