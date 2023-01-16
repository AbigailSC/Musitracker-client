import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'src/redux/store/store';
import { IGenres } from '@components/Genres/types';
import {
  IAlbumFull,
  IArtist,
  IArtistAlbums,
  IArtistFull,
  IMusic,
  IMusicSearched,
  ITopPlaylist,
  ITrending,
  ITrendingArtists,
  ITrendingPodcasts,
  IArtistSimilars
} from './types';

const initialState: IMusic = {
  musicFiltered: [],
  currentSong: null,
  genres: [],
  currentGenre: null,
  currentDominantColor: '',
  currentArtist: null,
  currentAlbum: null,
  currentPlaylist: null,
  artistAlbums: [],
  trendingMusic: [],
  trendingArtists: [],
  topPlaylist: [],
  trendingPodcasts: [],
  artistSimilars: [],
  isLoading: false
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setMusicBySearch: (state, action: PayloadAction<IMusicSearched>) => {
      state.musicFiltered = action.payload;
    },
    setOutMusicBySearch: (state) => {
      state.musicFiltered = [];
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
    setOutCurrentGenre: (state) => {
      state.currentGenre = null;
    },
    setCurrentArtist: (state, action: PayloadAction<IArtistFull>) => {
      state.currentArtist = action.payload;
    },
    setOutCurrentArtist: (state) => {
      state.currentArtist = null;
    },
    setArtistAlbums: (state, action: PayloadAction<IArtistAlbums>) => {
      state.artistAlbums = action.payload;
    },
    setOutArtistAlbums: (state) => {
      state.artistAlbums = [];
    },
    setCurrentAlbum: (state, action: PayloadAction<IAlbumFull>) => {
      state.currentAlbum = action.payload;
    },
    setOutCurrentAlbum: (state) => {
      state.currentAlbum = null;
    },
    setTrendingMusic: (state, action: PayloadAction<ITrending>) => {
      state.trendingMusic = action.payload;
    },
    setTrendingArtists: (state, action: PayloadAction<ITrendingArtists>) => {
      state.trendingArtists = action.payload;
    },
    setTopPlaylist: (state, action: PayloadAction<ITopPlaylist>) => {
      state.topPlaylist = action.payload;
    },
    setTrendingPodcasts: (state, action: PayloadAction<ITrendingPodcasts>) => {
      state.trendingPodcasts = action.payload;
    },
    setCurrentPlaylist: (state, action: PayloadAction<ITopPlaylist>) => {
      state.currentPlaylist = action.payload;
    },
    setOutCurrentPlaylist: (state) => {
      state.currentPlaylist = null;
    },
    setSimilarArtists: (state, action: PayloadAction<IArtistSimilars>) => {
      state.artistSimilars = action.payload;
    },
    setOutSimilarArsits: (state) => {
      state.artistSimilars = [];
    }
  }
});

export const {
  setMusicBySearch,
  setOutMusicBySearch,
  setIsLoading,
  setCurrentSong,
  setDominantColor,
  setGenres,
  setCurrentGenre,
  setOutCurrentGenre,
  setCurrentArtist,
  setOutCurrentArtist,
  setArtistAlbums,
  setOutArtistAlbums,
  setCurrentAlbum,
  setOutCurrentAlbum,
  setTrendingMusic,
  setTrendingArtists,
  setTopPlaylist,
  setTrendingPodcasts,
  setCurrentPlaylist,
  setOutCurrentPlaylist,
  setSimilarArtists,
  setOutSimilarArsits
} = musicSlice.actions;

export default musicSlice.reducer;

export const musicBySearch =
  (title: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    dispatch(setOutMusicBySearch());
    try {
      const musicData: AxiosResponse = await axios.get(
        `/music/search?title=${title.trim()}`
      );
      const musicFiltered = musicData.data.map((music: IMusicSearched) => {
        return {
          ...music,
          liked: false
        };
      });
      dispatch(setMusicBySearch(musicFiltered));
      return musicData;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const clearMusicBySearch =
  (): Thunk =>
  (dispatch): any => {
    try {
      dispatch(setOutMusicBySearch());
    } catch (error) {
      console.log(error);
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
    dispatch(setOutCurrentGenre());
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
    dispatch(setOutCurrentArtist());
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
    dispatch(setOutArtistAlbums());
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
    dispatch(setOutCurrentAlbum());
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

export const getTrendingMusic =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const trendingMusic: AxiosResponse = await axios.get('/music/trending');
      dispatch(setTrendingMusic(trendingMusic.data));
      return trendingMusic;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getTrendingArtists =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const trendingArtist: AxiosResponse = await axios.get(
        '/music/trending/artists'
      );
      dispatch(setTrendingArtists(trendingArtist.data));
      return trendingArtist;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getTopPlaylists =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const topPlaylist: AxiosResponse = await axios.get('/music/topPlaylist');
      dispatch(setTopPlaylist(topPlaylist.data));
      return topPlaylist;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getTrendingPodcasts =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const podcasts: AxiosResponse = await axios.get('/music/podcasts');
      dispatch(setTrendingPodcasts(podcasts.data));
      return podcasts;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getPlaylistById =
  (playlistId: number): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setOutCurrentPlaylist());
    dispatch(setIsLoading(true));
    try {
      const playlist: AxiosResponse = await axios.get(
        `/music/playlist/${playlistId}`
      );
      dispatch(setCurrentPlaylist(playlist.data));
      return playlist;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getRelatedArtists =
  (artistId: number): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setOutSimilarArsits());
    dispatch(setIsLoading(true));
    try {
      const playlist: AxiosResponse = await axios.get(
        `/music/related/${artistId}`
      );
      dispatch(setSimilarArtists(playlist.data));
      return playlist;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
