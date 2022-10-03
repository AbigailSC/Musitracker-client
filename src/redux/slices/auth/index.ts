import { createSlice } from '@reduxjs/toolkit';

export interface IAuth {
  accessToken: string | null;
}

const initialState: IAuth = {
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export default authSlice.reducer;
