import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GivenCourses } from "interfaces";


interface teacherState {
    isLoading: boolean;
    courses: GivenCourses[],
}

const initialState: teacherState = {
    isLoading: false,
    courses: [],
};

export const teacherSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoadingTEACHERS: (state: teacherState, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setCourses: (state: teacherState, { payload }: PayloadAction<GivenCourses[]>) => {
            state.courses = payload;
        }
    }
});

export const { setLoadingTEACHERS, setCourses } = teacherSlice.actions;
