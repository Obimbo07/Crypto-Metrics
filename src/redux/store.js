import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cryptoReducer from './Crypto/CryptoSlice';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  middleware,
});

export default store;
