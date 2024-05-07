const initialState = {
  isRole: "",
  isAuth: false,
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isRole: action.payload.Role,
        isAuth: action.payload.Result,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        isRole: " ",
        isAuth: false,
      };
    case 'CURRENT_USER':
      return {
        ...state,
        isLoading: action.payload,
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
