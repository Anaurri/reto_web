import { createContext, useState, useCallback, useEffect } from 'react';
import { currentCartStorageKey } from '../services/base-api-service';

const AuthContext = createContext();

function AuthStore({ children }) {

  const [carts, setCart] = useState(localStorage.getItem(currentCartStorageKey) ? JSON.parse(localStorage.getItem(currentCartStorageKey)) : undefined);

  const handleCartChange = useCallback((cart) => {
    let cartsAux = [1,2,3,4]
    console.log (cartsAux)

    cartsAux = carts
    console.log (cartsAux)
    if (cart) {
      cartsAux.push(cart)
      localStorage.setItem(currentCartStorageKey, JSON.stringify(cartsAux));
    }
    setCart(cartsAux);
  }, []);


  return (
    <AuthContext.Provider value={{ carts, onCartChange: handleCartChange }} >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthStore as default, AuthContext };
