import { configureStore } from '@reduxjs/toolkit';

import { uiSlice, teacherSlice, courseSlice, authSlice } from 'store';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        teacher: teacherSlice.reducer,
        courses: courseSlice.reducer,
        auth: authSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;