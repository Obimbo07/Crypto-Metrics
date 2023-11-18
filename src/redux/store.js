import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cryptoReducer from './Crypto/CryptoSlice';
import thunk from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  middleware,
});

export default store;
