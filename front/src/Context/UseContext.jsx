import React, { createContext, useState, useContext, useEffect } from 'react';
export const Context = createContext();

export const useContextValue = () => useContext(Context)

export const ContextProvider = ({ children }) => {

    const [contextId, setContextId] = useState();
    const [userId, setUserId] = useState();
    const [user, setUser] = useState();
    const [colorStateGlobal, setColorStateGlobal] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        if (userId) {
          localStorage.setItem('userId', userId);
        }
      }, [userId]);

    return (

        <Context.Provider value={{  colorStateGlobal, setColorStateGlobal, userId, setUserId, contextId, setContextId, user, setUser  }}>

            {children}
        </Context.Provider>
    );
};