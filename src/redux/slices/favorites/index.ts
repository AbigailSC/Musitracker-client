import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';
import { IMusicSearched } from '../music/types';

export interface IFavorites {
  favorites: Data | [];
  musicFav: IMusicSearched[] | [];
  isLoading: boolean;
}

export interface Data {
  idTitle: number;
  idUser: string;
}

const initialState: IFavorites = {
  favorites: [],
  musicFav: [],
  isLoading: false
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAllFavorites: (state, action: PayloadAction<Data>) => {
      state.favorites = action.payload;
    },
    setAddMusicFav: (state, action: PayloadAction<IMusicSearched>) => {
      state.musicFav = [...state.musicFav, action.payload];
    },
    setRemoveMusicFav: (state, action: PayloadAction<IMusicSearched>) => {
      // state.musicFav = [];
      state.musicFav = state.musicFav.filter(
        (music: IMusicSearched) => music.id !== action.payload.id
      );
    }
  }
});

export const {
  setIsLoading,
  setAllFavorites,
  setAddMusicFav,
  setRemoveMusicFav
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

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

export const addMusicFav =
  (obj: IMusicSearched): Thunk =>
  async (dispatch): Promise<void> => {
    try {
      dispatch(setAddMusicFav(obj));
    } catch (error) {
      console.log(error);
    }
  };

export const removeMusicFav =
  (obj: IMusicSearched): Thunk =>
  async (dispatch): Promise<void> => {
    try {
      dispatch(setRemoveMusicFav(obj));
    } catch (error) {
      console.log(error);
    }
  };
