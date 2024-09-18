import React, { useState } from 'react';
import PropTypes from 'prop-types';
import x from '../../assets/icons/x.svg';

export default function CategoryForm(props) {
    const [categoryName, setCategoryName] = useState('');
    const { setIsModalOpen } = props;

    function handleAddCategory(event) {
        event.preventDefault();
        console.log(categoryName);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    if (!props.isModalOpen) {
        return null;
    }
    return (
        <main className="absolute left-0 top-0 flex h-full w-full items-center justify-center p-2">
            <form className="flex rounded-md border border-gray-900 p-10 text-black backdrop-blur-sm">
                <div>
                    <h1 className="text-center text-lg font-bold">
                        Adicione Nova Categoria
                    </h1>
                    <input
                        value={categoryName}
                        onChange={(event) =>
                            setCategoryName(event.target.value)
                        }
                        className="mr-1 w-full rounded-md border border-gray-900 p-2 sm:w-44"
                    />
                    <button
                        onClick={handleAddCategory}
                        className="mr-1 mt-2 w-full rounded-md border border-gray-950 p-2 hover:bg-gray-950 hover:text-gray-200 sm:w-44"
                        type="submit"
                    >
                        Adicionar Categoria
                    </button>
                </div>
                <button
                    type="button"
                    onClick={handleCloseModal}
                    className="h-fit"
                >
                    <img src={x} alt="Close" className="" />
                </button>
            </form>
        </main>
    );
}
CategoryForm.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
};
