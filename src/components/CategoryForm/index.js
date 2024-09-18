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
        <main className=" w-full h-full absolute top-0 left-0 p-2 flex justify-center items-center  ">
            <form className="flex p-10 border border-gray-900 rounded-md text-black backdrop-blur-sm ">
                <div>
                    <h1 className="text-center text-lg font-bold">
                        Adicione Nova Categoria
                    </h1>
                    <input
                        value={categoryName}
                        onChange={(event) =>
                            setCategoryName(event.target.value)
                        }
                        className="w-full sm:w-44  mr-1  p-2 border border-gray-900 rounded-md "
                    />
                    <button
                        onClick={handleAddCategory}
                        className="p-2 mr-1 mt-2 rounded-md border border-gray-950 hover:bg-gray-950 hover:text-gray-200 w-full sm:w-44"
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
