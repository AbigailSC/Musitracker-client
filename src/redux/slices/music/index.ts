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
  currentArtist: IArtistFull | null;
  currentAlbum: IAlbumFull | null;
  artistAlbums: IArtistAlbums | [];
  isLoading: boolean;
}

export interface IAlbumFull {
  id: number;
  title: string;
  link: string;
  cover_big: string;
  genres: {
    id: number;
    name: string;
  };
  label: string;
  release_date: string;
  tracklist: string;
  duration_total: number;
  contributors: {
    id: number;
    name: string;
    link: string;
    picture_big: string;
    role: string;
  };
  artist: {
    id: number;
    name: string;
    picture_xl: string;
  };
  tracks: IAlbumFullTracks;
}

interface IAlbumFullTracks {
  id: number;
  title: string;
  link: string;
  duration: number;
  preview: string;
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

export interface IArtistFull {
  id: number;
  name: string;
  link: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
}

export interface IArtistAlbums {
  id: number;
  title: string;
  cover_big: string;
  genre_id: number;
  fans: number;
  release_date: string;
  record_type: string;
  type: string;
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
  currentArtist: null,
  currentAlbum: null,
  artistAlbums: [],
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
    },
    setCurrentArtist: (state, action: PayloadAction<IArtistFull>) => {
      state.currentArtist = action.payload;
    },
    setArtistAlbums: (state, action: PayloadAction<IArtistAlbums>) => {
      state.artistAlbums = action.payload;
    },
    setCurrentAlbum: (state, action: PayloadAction<IAlbumFull>) => {
      state.currentAlbum = action.payload;
    }
  }
});

export const {
  getMusicBySearch,
  setIsLoading,
  setCurrentSong,
  setDominantColor,
  setGenres,
  setCurrentGenre,
  setCurrentArtist,
  setArtistAlbums,
  setCurrentAlbum
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

export const getCurrentArtist =
  (artistId: number): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const artistSelected: AxiosResponse = await axios.get(
        `/music/artist/${artistId}`
      );
      const artistTopTracks = await axios.get(
        `/music/artist/${artistId}/topTracks`
      );
      const artistWithTopTracks = {
        ...artistSelected.data,
        topTracks: artistTopTracks.data
      };
      dispatch(setCurrentArtist(artistWithTopTracks));
      return artistSelected;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getArtistAlbums =
  (artistId: number): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const artistSelected: AxiosResponse = await axios.get(
        `/music/artist/${artistId}/albums/1`
      );
      const artistFiltered = artistSelected.data.apiData.map(
        (music: IArtistAlbums) => music
      );
      dispatch(setArtistAlbums(artistFiltered));
      return artistSelected;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getCurrentAlbum =
  (albumId: number): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const albumSelected: AxiosResponse = await axios.get(
        `/music/album/${albumId}`
      );
      dispatch(setCurrentAlbum(albumSelected.data));
      return albumSelected;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
