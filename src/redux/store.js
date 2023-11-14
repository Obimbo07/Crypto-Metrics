import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './Crypto/CryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
