import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiState {
    isLoading: boolean;
    isHistorial: boolean;
    isActiveCourses: boolean;
}

const initialState: uiState = {
    isLoading: false,
    isHistorial: false,
    isActiveCourses: true,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoadingUI: (state: uiState, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setHistorial: (state: uiState, { payload }: PayloadAction<boolean>) => {
            state.isHistorial = payload;
        },
        setActiveCourses: (state: uiState, { payload }: PayloadAction<boolean>) => {
            state.isActiveCourses = payload;
        }
    }
});

export const { setLoadingUI, setHistorial, setActiveCourses } = uiSlice.actions;
