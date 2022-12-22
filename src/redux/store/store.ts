import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../slices/auth';
import userSlice from '../slices/user/user';
import musicReducer from '../slices/music';

const persistAuthConfig = {
  key: 'authToken',
  storage,
  whitelist: ['accessToken']
};
const persistCurrentMusicConfig = {
  key: 'currentMusic',
  storage,
  whitelist: [
    'currentSong',
    'currentGenre',
    'musicFiltered',
    'currentDominantColor',
    'currentArtist',
    'artistAlbums',
    'currentAlbum'
  ]
};

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    ),
    userSlice,
    musicSlice: persistReducer<ReturnType<typeof musicReducer>>(
      persistCurrentMusicConfig,
      musicReducer
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;
export const persistor = persistStore(store);

export default store;
