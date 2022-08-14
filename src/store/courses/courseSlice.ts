import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from 'interfaces/Courses';
import { GivenCourses } from '../../interfaces/GivenCourses';

interface courseState {
    isLoading: boolean;
    activeCourse: Course | null;
}

const initialState: courseState = {
    isLoading: false,
    activeCourse: null
};

export const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setLoadingCOURSE: (state: courseState, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setActiveCourse: (state: courseState, { payload }: PayloadAction<Course>) => {
            state.activeCourse = payload;
        }
    }
});

export const { setLoadingCOURSE, setActiveCourse } = courseSlice.actions;
