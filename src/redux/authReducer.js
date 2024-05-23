import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRole: "",
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.isRole = action.payload.role;
      state.isAuth = action.payload.succeeded;
    },
    logoutUser(state) {
      state.isRole = "";
      state.isAuth = false;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
