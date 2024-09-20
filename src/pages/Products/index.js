import { useState } from 'react';
import CategoryForm from '../../components/CategoryForm';
import ProductForm from '../../components/ProductForm';
import ProductList from '../../components/ProductList';
import ProductsService from '../../services/ProductsService';
import CategoriesService from '../../services/CategoriesService';

export default function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(!isModalOpen);
    }

    async function handleSubmit(formData) {
        try {
            const product = {
                date: formData.productDateBuy,
                quantity: formData.productQuantity,
                name: formData.productName,
                category_id: formData.productCategoryId,
            };
            console.log('da pagina Produtos', product);

            const response = await ProductsService.createListProducts(product);
            console.log(response);
        } catch (error) {
            console.log('erro cadastro produto', error);
        }
    }
    async function handleCategorySubmit(formData) {
        try {
            const category = {
                name: formData.categoryName,
            };
            console.log(category);

            const response = await CategoriesService.createCategory(category);
            console.log(response);
        } catch (error) {
            console.log('erro cadastro de categoria', error);
        }
    }

    return (
        <div className="flex justify-center">
            <CategoryForm
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                onSubmit={handleCategorySubmit}
            />
            <div>
                <div className="mx-1 mb-3 max-w-2xl rounded-md shadow-md shadow-slate-600">
                    <ProductForm onSubmit={handleSubmit} />
                    <button
                        onClick={handleOpenModal}
                        className="m-2 font-bold hover:underline"
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
