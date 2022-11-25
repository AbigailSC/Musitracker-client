import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';
export interface IAuth {
  accessToken: string | null;
  isLoading: boolean;
}

export interface Data {
  username: string;
  email: string;
  password: string;
}

const initialState: IAuth = {
  accessToken: null,
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postUser: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { postUser, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

export const postUserAuth =
  (data: Data): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const newUser: AxiosResponse = await axios.post('/auth/singup', data);
      const token = newUser.data.token;
      dispatch(postUser(token));
      return token;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
