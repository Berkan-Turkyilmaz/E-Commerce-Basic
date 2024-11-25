import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [products, setProducts] = useState([
    ]);
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect (() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
        
    }, []);
    

    return (
        <GlobalContext.Provider value={{ products, setProducts, isDarkMode, setIsDarkMode }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;