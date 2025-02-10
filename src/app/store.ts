import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        snackbar: snackbarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch