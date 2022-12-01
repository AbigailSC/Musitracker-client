export interface ITitle {
  id: number;
  duration: number;
  link: string;
  preview: string;
  rank: number;
  title: string;
  album: IAlbum;
  artist: IArtist;
}

interface IAlbum {
  cover: string;
  id: number;
  title: string;
  type: string;
}

interface IArtist {
  id: number;
  link: string;
  name: string;
  picture: string;
}
