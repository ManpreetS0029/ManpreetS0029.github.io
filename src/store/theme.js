import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialThemeState = {
  mode: 'light',
  uiColor: '#DE495A',
  theme: {
    color: 'rgb(0, 31, 63)',
    backgroundColor: '#FFFFFF',
  },
  nonThemeColor: 'black',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    changeThemeColor(state, action) {
      state.theme.color = action.payload;
    },
    setMode(state, action) {
      console.log(action.payload);
      if (action.payload === 'dark') {
        state.mode = 'dark';
        state.theme.color = 'white';
        state.theme.backgroundColor = '#121212';
        state.nonThemeColor = 'white';
      } else {
        state.mode = 'light';
        state.theme = initialThemeState.theme;
        state.nonThemeColor = 'black';
      }
    },
  },
});
const store = configureStore({
  reducer: themeSlice.reducer,
});

export const themeActions = themeSlice.actions;
export default store;
