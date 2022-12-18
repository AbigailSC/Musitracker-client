import React from 'react';
import Home from '@components/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '@components/NotFound';
import About from '@components/About';
import Details from '@components/Details';
import Results from '@components/Results';
import Profile from '@components/Profile';
import Landing from '@components/Landing';
import SingIn from '@components/SingIn';
import SingUp from '@components/SingUp';
import Mediaplayer from '@components/Mediaplayer';
import GlobalStyle from './styles/global';
import ResultsByGenre from '@components/ResultsByGenre';

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
          element={user ? <Navigate replace to="/" /> : <Details />}
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
