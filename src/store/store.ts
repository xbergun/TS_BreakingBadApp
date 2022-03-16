import { configureStore} from "@reduxjs/toolkit";
import CharacterSlice from "./CharacterSlice/CharacterSlice";

export const store = configureStore({
    reducer: {
        characters: CharacterSlice
    }
});





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
