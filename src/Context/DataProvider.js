import React, { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(async (response) => {
        const json = await response.json();
        setCategory(json);
      })
      .catch((error) => console.log("erro", error));
  }, []);

  return (
    <CategoryContext.Provider value={category}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(async (response) => {
        const json = await response.json();
        setProducts(json);
      })

      .catch((error) => console.log("erro", error));
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
