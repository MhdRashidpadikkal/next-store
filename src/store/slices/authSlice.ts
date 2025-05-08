import { User, AuthState, LoginData, RegisterData } from "@/types/auth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
    'auth/register',
    async(credentials: RegisterData, {rejectWithValue}) => {
        const { username, email, password, confirmPassword } = credentials;

        if (password !== confirmPassword) {
            return rejectWithValue("Passwords do not match");
        }

        try {
            const response = await axios.post("http://localhost:1337/api/auth/local/register", {
                username,
                email,
                password
            });
            return response.data; // user and jwt
        }catch (error: any) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async(credentials: LoginData, {rejectWithValue}) => {
        const { identifier, password } = credentials;

        try {
            const response = await axios.post("http://localhost:1337/api/auth/local", {
                identifier,
                password
            });
            return response.data; // user and jwt
        }catch (error: any) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }

)


const initialState:AuthState = {
    user: null,
    jwt: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: User, jwt: string }>) => {
            state.user = action.payload.user;
            state.jwt = action.payload.jwt;
        },
        logout(state) {
            state.user = null;
            state.jwt = null;

            localStorage.removeItem("user");
            localStorage.removeItem("jwt");
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.jwt = action.payload.jwt;

                localStorage.setItem("user", JSON.stringify(action.payload.user));
                localStorage.setItem("jwt", action.payload.jwt);
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });

            builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.jwt = action.payload.jwt;

                localStorage.setItem("user", JSON.stringify(action.payload.user));
                localStorage.setItem("jwt", action.payload.jwt);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

    }

})

export const { setCredentials, logout} = authSlice.actions
export const {reducer: authReducer} = authSlice