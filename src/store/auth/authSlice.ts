import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
    isLoading: boolean;
    isLoggedIn: boolean;
    user: {
        id: string | null;
    }
}

const initialState: authState = {
    isLoading: false,
    isLoggedIn: false,
    user: {
        id: null,
    }

};

export const authSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setLoadingAUTH: (state: authState, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        setUser: (state: authState, action: PayloadAction<{ id: string }>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },

        logOut: (state: authState) => {
            state.isLoggedIn = false;
            state.user = {
                id: null,
            }

        }


    }
});

export const { setLoadingAUTH, setUser } = authSlice.actions;
