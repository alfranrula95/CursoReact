import { createContext } from 'react';

// Estado inicial de la aplicación.
const initialState = {
  logged: false,
  login: () => {},
  logout: () => {}
}

export default createContext(initialState)