import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "@/slice/MenuSlice";

export const store = configureStore({
    reducer:{
        menu:MenuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>