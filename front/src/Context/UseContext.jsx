import React, { createContext, useState, useContext } from 'react';
export const Context = createContext();

export const useContextValue = () => useContext(Context)

export const ContextProvider = ({ children }) => {

    const [contextId, setContextId] = useState();
    const [userId, setUserId] = useState();
    const [colorStateGlobal, setColorStateGlobal] = useState();

    return (
        <Context.Provider value={{  colorStateGlobal, setColorStateGlobal, userId, setUserId, contextId, setContextId }}>
            {children}
        </Context.Provider>
    );
};