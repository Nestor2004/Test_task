import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const user = { email, password };
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        logout: (state) => {
            localStorage.removeItem('user');
            state.user = null;
        },
        checkAuth: (state) => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                state.user = user;
            }
        },
    },
});
export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;