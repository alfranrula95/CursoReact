/** Fichero context/reducers.js */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const initialStateLogger = {
    logged: false
};

export const reducerLogger = (state, action) => {
  switch (action.type) {
    case LOGIN: return {...initialStateLogger, logged: true};
    case LOGOUT: return {...initialStateLogger, logged: false};
    default: return state;
  }
};