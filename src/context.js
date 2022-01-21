import { useContext, useReducer, createContext } from 'react';

export const productContext  = createContext();

export const ProductProvider = ( { reducer, initialState, children}) => (
  <productContext.Provider
    value={useReducer(reducer, initialState)}
  >
    {children}
  </productContext.Provider>
);

export const useStateValue = () => useContext(productContext);