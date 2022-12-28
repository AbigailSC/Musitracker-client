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
  trendingMusic: ITrending | [];
  trendingArtists: ITrendingArtists | [];
  topPlaylist: ITopPlaylist | [];
  trendingPodcasts: ITrendingPodcasts | [];
  isLoading: boolean;
}

export interface ITrendingPodcasts {
  id: number;
  title: string;
  description: string;
  link: string;
  picture: string;
}

export interface ITopPlaylist {
  id: number;
  title: string;
  nb_tracks: number;
  picture_xl: string;
  tracklist: string;
  creation_date: string;
  creator: {
    id: number;
    name: string;
  };
}

export interface ITrending {
  id: number;
  title: string;
  link: string;
  duration: number;
  rank: number;
  preview: string;
  track_position: number;
  release_date: string;
  type: string;
  album: IAlbum;
  contributors: IContributors;
}

export interface ITrendingArtists {
  id: number;
  name: string;
  link: string;
  picture_xl: string;
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
  record_type: string;
  duration_total: number;
  contributors: IContributors;
  artist: {
    id: number;
    name: string;
    picture_xl: string;
  };
  tracks: IAlbumFullTracks;
}

export interface IContributors {
  id: number;
  name: string;
  link: string;
  picture_big: string;
  role: string;
}

export interface IAlbumFullTracks {
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
  topTracks: IArtistFullTopTracks;
}

export interface IArtistFullTopTracks {
  id: number;
  title: string;
  preview: string;
  duration: number;
  rank: number;
  artist: {
    name: string;
  };
  album: {
    title: string;
    cover: string;
  };
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

export interface IArtist {
  id: number;
  name: string;
  link: string;
  picture: string;
}
export interface IAlbum {
  id: number;
  title: string;
  cover: string;
  type: string;
}
