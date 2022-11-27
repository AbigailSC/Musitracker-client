import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';

export interface IMusic {
  musicFiltered: IMusicSearched | [];
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
    }
  }
});

export const { getMusicBySearch, setIsLoading } = musicSlice.actions;

export default musicSlice.reducer;

export const musicBySearch =
  (title: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const musicData: AxiosResponse = await axios.get(
        `/music/search?title=${title}`
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
