import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';
import { Data } from '../auth';

export interface IUser {
  users: IUserData | [];
  userInfo: IUserInfo | null;
  isLoading: boolean;
}

interface IUserInfo {
  _id: string;
  username: string;
  email: string;
  password?: string;
  imageProfile: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserData {
  email: string;
}

const initialState: IUser = {
  users: [],
  userInfo: null,
  isLoading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<IUserData>) => {
      state.users = action.payload;
    },
    getUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    },
    singOut: (state) => {
      state.userInfo = null;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { getUsers, getUserInfo, singOut, setIsLoading } =
  userSlice.actions;

export default userSlice.reducer;

export const getUsersInfo =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const users: AxiosResponse = await axios.get('/user');
      const dataUsers = users.data.map((user: IUserData) => {
        return {
          email: user.email
        };
      });
      dispatch(getUsers(dataUsers));
      return users;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const singIn =
  (data: Data): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const user = await axios.post('/auth/singin', data);
      dispatch(getUserInfo(user.data.user));
      return user;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const logOut =
  (): Thunk =>
  (dispatch): any => {
    dispatch(setIsLoading(true));
    try {
      dispatch(singOut());
    } catch (error) {
      return error;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
