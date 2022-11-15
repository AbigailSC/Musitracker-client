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
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist/:idArtist" element={<Details />} />
        <Route path="/search=:nameTrack" element={<Results />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

export default App;
