import React from "react";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import x from "../../assets/icons/x.svg";
import { useProducts } from "../../Context/DataProvider";

export default function ProductList() {
  const products = useProducts();

  return (
    <aside className="backdrop-blur-lg p-2 shadow-lg rounded-md w-full max-w-sm">
      <h1 className="text-center">Compras Listadas</h1>
      <div className="flex m-1">
        <div>
          <span>Data:</span>
          {products.map((product) => (
            <div key={product.id} className=" ">
              <p className="border px-2 bg-slate-500 ">{product.date}</p>
            </div>
          ))}
        </div>
        <div>
          <span>Nome:</span>
          {products.map((product) => (
            <div key={product.id} className="">
              <p className="border px-2 bg-slate-500 ">{product.name}</p>
            </div>
          ))}
        </div>
        <div>
          <span>Qtd:</span>
          {products.map((product) => (
            <div key={product.id} className="">
              <p className="border bg-slate-500 px-3">{product.quantity}</p>
            </div>
          ))}
        </div>
        <div>
          <span>Categoria:</span>
          {products.map((product) => (
            <div key={product.id} className="">
              <p className="border px-2 bg-slate-500">
                {product.category_name}
              </p>
            </div>
          ))}
        </div>
        <div>
          <span>Excluir</span>
          {products.map((product) => (
            <div key={product.id} className="">
              <button className=" ">
                <XIcon
                  className="ml-4  fill-inherit text-red-600 h-5"
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
