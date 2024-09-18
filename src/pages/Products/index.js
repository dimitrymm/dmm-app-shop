import { useState } from 'react';
import CategoryForm from '../../components/CategoryForm';
import ProductForm from '../../components/ProductForm';
import ProductList from '../../components/ProductList';

export default function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
    }
    return (
        <div className="flex justify-center">
            <CategoryForm
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <div>
                <div className="mx-1 mb-3 max-w-2xl rounded-md shadow-md shadow-slate-600">
                    <ProductForm />
                    <button
                        onClick={handleOpenModal}
                        className="mr-1 font-bold hover:underline"
                    >
                        Adicionar Categoria
                    </button>
                </div>
                <div className="mx-1 mb-3 max-w-2xl rounded-md shadow-md shadow-slate-600">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}
