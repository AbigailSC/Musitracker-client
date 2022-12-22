import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '@components/About';
import Profile from '@components/Profile';
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

const App: React.FC = () => {
  const user = false;
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
              <Navigate replace to="/" />
            ) : (
              <>
                <Home />
                <Mediaplayer />
              </>
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/artist/:idArtist"
          element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <>
                <Artist />
                <Mediaplayer />
              </>
            )
          }
        />
        <Route
          path="/genre/:genre"
          element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <>
                <ResultsByGenre />
                <Mediaplayer />
              </>
            )
          }
        />
        <Route
          path="/search=:name"
          element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <>
                <Results />
                <Mediaplayer />
              </>
            )
          }
        />
        <Route
          path="/album/:albumId"
          element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <>
                <AlbumDetails />
                <Mediaplayer />
              </>
            )
          }
        />

        <Route
          path="/profile"
          element={user ? <Navigate replace to="/" /> : <Profile />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

export default App;
