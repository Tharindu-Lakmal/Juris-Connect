import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [token, setToken] = useState("");
    const url = "http://localhost:4000";

    // avoid logout when refresh the webpage
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    },[])

    

    const contextValue = {
        url,
        token,
        setToken, // Expose setToken to store the login token
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
