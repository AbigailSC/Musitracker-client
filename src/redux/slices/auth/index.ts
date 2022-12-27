import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';

export interface IAuth {
  accessToken: string | null;
  isLoading: boolean;
  user: IUser | null;
}

export interface Data {
  username?: string;
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
}

const initialState: IAuth = {
  accessToken: null,
  user: null,
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postUser: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.user = null;
    },
    singIn: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { postUser, singIn, logOut, setIsLoading } = authSlice.actions;

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

export const singInAuth =
  (data: Data): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const user = await axios.post('/auth/singin', data);
      const token = user.data.token;
      dispatch(singIn(user.data.user));
      dispatch(postUser(token));
      return token;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getlogOut =
  (): Thunk =>
  (dispatch): any => {
    dispatch(setIsLoading(true));
    try {
      dispatch(logOut());
    } catch (error) {
      return error;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
