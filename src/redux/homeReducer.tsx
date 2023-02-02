import {createSlice} from '@reduxjs/toolkit';

export interface HomeState {
  initialTitle: string;
}
const initialState = {
  initialTitle: 'YourAppTitle',
} as HomeState;

export const homeReducer = createSlice({
  name: 'challenge',
  initialState: initialState,
  reducers: {
    setInitialTitle: (state, action) => {
      state.initialTitle = action.payload;
    },
  },
});

export const {setInitialTitle} = homeReducer.actions;

export default homeReducer.reducer;
