import React, { useState } from 'react';

export default function ProductForm() {
    const [productName, setProductName] = useState('');
    const [productDateBuy, setProductDateBuy] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategory, setProductCategory] = useState('');

    function handleAddProduct(event) {
        event.preventDefault();
        console.table({
            productDateBuy,
            productQuantity,
            productName,
            productCategory,
        });
    }

    return (
        <main className="p-2 ">
            <form className="text-black space-x-1 ">
                <input
                    value={productDateBuy}
                    onChange={(event) => setProductDateBuy(event.target.value)}
                    type="date"
                    className="py-2 w-56 sm:w-32 border border-gray-900 rounded-md"
                />
                <input
                    value={productQuantity}
                    onChange={(event) => setProductQuantity(event.target.value)}
                    placeholder="Qtd"
                    className="py-2 w-28 sm:w-16 border border-gray-900 rounded-md"
                />
                <input
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                    placeholder="Nome"
                    className="py-2  w-56 sm:w-32 border border-gray-900 rounded-md"
                />
                <select
                    value={productCategory}
                    onChange={(event) => setProductCategory(event.target.value)}
                    className="py-2  w-28 sm:w-32 border border-gray-900 rounded-md"
                >
                    <option value="">Categoria</option>
                    <option value="frutas">Frutas</option>
                    <option value="legumes">Legumes</option>
                </select>
                <button
                    className="p-2 rounded-md mt-1 border border-gray-950 hover:bg-gray-950 hover:text-gray-200 w-full sm:w-40 mx-2 sm:mx-1 "
                    type="submit"
                    onClick={handleAddProduct}
                >
                    Adicionar Compra
                </button>
            </form>
        </main>
    );
}
