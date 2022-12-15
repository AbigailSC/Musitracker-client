import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';
import { IGenres } from '@components/Genres/types';

export interface IMusic {
  musicFiltered: IMusicSearched | [];
  currentSong: IMusicSearched | null;
  genres: IGenres | [];
  currentGenre: IGenres | null;
  currentDominantColor: string;
  isLoading: boolean;
}

export interface IMusicSearched {
  id: number;
  title: string;
  link: string;
  duration: number;
  rank: number;
  preview: string;
  artist: IArtist;
  album: IAlbum;
}

interface IArtist {
  id: number;
  name: string;
  link: string;
  picture: string;
}
interface IAlbum {
  id: number;
  title: string;
  cover: string;
  type: string;
}

const initialState: IMusic = {
  musicFiltered: [],
  currentSong: null,
  genres: [],
  currentGenre: null,
  currentDominantColor: '',
  isLoading: false
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    getMusicBySearch: (state, action: PayloadAction<IMusicSearched>) => {
      state.musicFiltered = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentSong: (state, action: PayloadAction<IMusicSearched>) => {
      state.currentSong = action.payload;
    },
    setDominantColor: (state, action: PayloadAction<string>) => {
      state.currentDominantColor = action.payload;
    },
    setGenres: (state, action: PayloadAction<IGenres>) => {
      state.genres = action.payload;
    },
    setCurrentGenre: (state, action: PayloadAction<IGenres>) => {
      state.currentGenre = action.payload;
    }
  }
});

export const {
  getMusicBySearch,
  setIsLoading,
  setCurrentSong,
  setDominantColor,
  setGenres,
  setCurrentGenre
} = musicSlice.actions;

export default musicSlice.reducer;

export const musicBySearch =
  (title: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const musicData: AxiosResponse = await axios.get(
        `/music/search?title=${title.trim()}`
      );
      const musicFiltered = musicData.data.map(
        (music: IMusicSearched) => music
      );
      dispatch(getMusicBySearch(musicFiltered));
      return musicData;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getCurrentSong =
  (song: IMusicSearched): Thunk =>
  (dispatch): any => {
    try {
      dispatch(setCurrentSong(song));
    } catch (error) {
      return error;
    }
  };

export const getDominantColor =
  (color: string): Thunk =>
  (dispatch): any => {
    try {
      dispatch(setDominantColor(color));
    } catch (error) {
      return error;
    }
  };

export const getGenres =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const genresData: AxiosResponse = await axios.get('/music/genres');
      const genresFiltered = genresData.data.map(
        (music: IMusicSearched) => music
      );
      dispatch(setGenres(genresFiltered));
      return genresData;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getCurrentGenre =
  (genre: number): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const genreSelected: AxiosResponse = await axios.get(
        `/music/genres/${genre}`
      );
      const genreFiltered = genreSelected.data.map((music: IArtist) => music);
      dispatch(setCurrentGenre(genreFiltered));
      return genreSelected;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
