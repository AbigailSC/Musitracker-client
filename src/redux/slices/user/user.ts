import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';

export interface IUser {
  users: IUserData | [];
  isLoading: boolean;
}

export interface IUserData {
  email: string;
}

const initialState: IUser = {
  users: [],
  isLoading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<IUserData>) => {
      state.users = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { getUsers, setIsLoading } = userSlice.actions;

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
