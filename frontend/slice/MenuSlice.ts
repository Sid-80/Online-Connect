import { MENU_ITEMS } from "@/components/constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
    activeMenuItem: string;
    actionMenuItem:string | null;
}

const initialState:InitialState = {
    activeMenuItem:MENU_ITEMS.PENCIL,
    actionMenuItem:null,
}

export const MenuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        menuItemClick : (state,action:PayloadAction<string>) => {
            state.activeMenuItem = action.payload;
        },
        actionItemClick : (state,action:PayloadAction<string>) => {
            state.actionMenuItem = action.payload;
        }
    }
})

export const {menuItemClick,actionItemClick} = MenuSlice.actions;

export default MenuSlice.reducer;