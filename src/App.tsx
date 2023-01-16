import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '@components/About';
import Profile from '@pages/Profile';
import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import Results from '@pages/Results';
import Landing from '@pages/Landing';
import SingIn from '@pages/SingIn';
import SingUp from '@pages/SingUp';
import Mediaplayer from '@components/Mediaplayer';
import ResultsByGenre from '@pages/ResultsByGenre';
import Artist from '@pages/Artist';
import AlbumDetails from '@pages/AlbumDetails';
import GlobalStyle from './styles/global';
import { useCustomSelector } from '@hooks/redux/index';
import Playlist from '@pages/Playlist';
import RelatedArtists from '@pages/RelatedArtists';

const App: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);
  const user = auth.accessToken !== null;

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route
          path="/home"
          element={
            user ? (
              <>
                <Home />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/artist/:idArtist"
          element={
            user ? (
              <>
                <Artist />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/genre/:genre"
          element={
            user ? (
              <>
                <ResultsByGenre />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/search=:name"
          element={
            user ? (
              <>
                <Results />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/album/:albumId"
          element={
            user ? (
              <>
                <AlbumDetails />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/related/:idArtist"
          element={
            user ? (
              <>
                <RelatedArtists />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            user ? (
              <>
                <Playlist />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            user ? (
              <>
                <Profile />
                <Mediaplayer />
              </>
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

export default App;
