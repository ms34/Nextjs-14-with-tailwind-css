import { RootState } from "@/app/lib/store/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
 count: number
}

const initialState: IUserState = {
 count: 0
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    initializeCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },

  },
});

export default userSlice.reducer;

export const {
    initializeCount,
} = userSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.userState.isAuthenticated;
