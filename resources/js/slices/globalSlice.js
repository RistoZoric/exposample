import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isMobileMenuOpen: false,
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

export const selectGlobal = (state) => state.global;

export const {
  toggleMobileMenu,
  openMobileMenu,
  closeMobileMenu,
} = globalSlice.actions;

export default globalSlice.reducer;
