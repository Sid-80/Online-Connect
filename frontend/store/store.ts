import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "@/slice/MenuSlice";
import ToolBoxReducer from "@/slice/ToolBarSlice";

export const store = configureStore({
    reducer:{
        menu:MenuReducer,
        tool:ToolBoxReducer
    }
})

export type RootState = ReturnType<typeof store.getState>