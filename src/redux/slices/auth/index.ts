import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';

export interface IAuth {
  accessToken: string | null;
}

const initialState: IAuth = {
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postUser: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    }
  }
});

export const { postUser } = authSlice.actions;

export default authSlice.reducer;

export const postUserAuth = async (userdata: object): Promise<void> => {
  try {
    const newUser: AxiosResponse = await axios.post('/auth/singup', userdata);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};
