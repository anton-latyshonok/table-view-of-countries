import React, {useState, useEffect, createContext, useContext} from "react";
import {getData} from "../api/api";

export const ContextAll = createContext();
export const useContextFunction = () => {
    return useContext(ContextAll);
};

export const ContextProvider = ({children}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getData(setData);
    }, []);

    return (
        <ContextAll.Provider value={{data}}>
            {children}
        </ContextAll.Provider>
    );
};
