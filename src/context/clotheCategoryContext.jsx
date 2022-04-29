import React, { createContext, useContext, useEffect, useState } from "react";
import api from '../services/api';
const ClotheCategoryContext = createContext();

    const ClotheCategoryProvider = ({ children }) => {

        const [productsByCategory, setproductsByCategory] = useState([]);

        
            const fetchDataByCategory = async (category) => {
                const response = await api.GetProductByCategory(category);
                setproductsByCategory(response)
                console.log(response)
            }
           
            const values = {
                productsByCategory,
               fetchDataByCategory
              };

        return (
            <ClotheCategoryContext.Provider value={values}>
                {children}
            </ClotheCategoryContext.Provider>
        );
    }

    
const useCategory = () => useContext(ClotheCategoryContext);
export { ClotheCategoryProvider, useCategory };