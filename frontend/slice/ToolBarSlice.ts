import { COLORS, MENU_ITEMS } from "@/components/constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
    PENCIL:{
        color:string;
        size:number;
    };
    ERASER:{
        color:string;
        size:number;
    };
    REDO:{

    };
    UNDO:{
  
    };
    MenuItemDownload:{

    };
}

const initialState:InitialState = {
    PENCIL:{
        color:COLORS.BLACK,
        size:3
    },
    ERASER:{
        color:COLORS.WHITE,
        size:3
    },
    MenuItemDownload:{},
    REDO:{},
    UNDO:{}
}

export const ToolSlice = createSlice({
    name:"toolbox",
    initialState,
    reducers:{
        setColor : (state,action:PayloadAction<string>) => {
            state.PENCIL.color = action.payload;
        },
        setSize : (state,action:PayloadAction<{item:string;size:number}>) => {
            (action.payload.item === MENU_ITEMS.PENCIL) ? 
            state.PENCIL.size = action.payload.size :
            state.ERASER.size = action.payload.size;
        }
    }
})

export const {setColor,setSize} = ToolSlice.actions;

export default ToolSlice.reducer;