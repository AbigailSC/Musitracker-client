import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';

export interface IFavorites {
  favorites: Data | [];
  isLoading: boolean;
}

export interface Data {
  idTitle: number;
  idUser: string;
}

const initialState: IFavorites = {
  favorites: [],
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAllFavorites: (state, action: PayloadAction<Data>) => {
      state.favorites = action.payload;
    }
  }
});

export const { setIsLoading, setAllFavorites } = authSlice.actions;

export default authSlice.reducer;

export const addFavorite =
  (userInfo: Data, token: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      // import header
      const config = {
        headers: {
          authToken: token
        }
      };
      const newUser: AxiosResponse = await axios.post(
        '/user/favorites',
        userInfo,
        config
      );
      return newUser;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getFavorites =
  (token: string, idUser: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      // import header
      const config = {
        headers: {
          authToken: token
        }
      };
      const newUser: AxiosResponse = await axios.get(
        `/user/favorites/${idUser}`,
        config
      );
      dispatch(setAllFavorites(newUser.data));
      return newUser;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const removeFavorite =
  (token: string, idFavorite: string, idUser: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      // import header
      const config = {
        headers: {
          authToken: token
        }
      };
      const newUser: AxiosResponse = await axios.put(
        `/user/favorites/${idFavorite}`,
        idUser,
        config
      );
      return newUser;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
