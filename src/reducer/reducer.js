const initialState = {
    user: {},
    isAuth: false,
    isLoading: false,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          user: action.payload.user,
          isAuth: true,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          user: {},
          isAuth: false,
        };
      case 'SET_LOADING':
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state;
    }
  };
  