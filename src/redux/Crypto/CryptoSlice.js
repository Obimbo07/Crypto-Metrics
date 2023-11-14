import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cryptocurrencies: [],
  status: 'idle',
  error: null,
};

export const fetchCryptocurrencies = createAsyncThunk(
  'crypto/fetchCryptocurrencies',
  async () => {
    const response = await axios.get(
      'https://financialmodelingprep.com/AxRASTNmr14KNNzub18PPVbKg7zHZLkb/v3/symbol/available-cryptocurrencies',
    );
    return response.data;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptocurrencies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptocurrencies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cryptocurrencies = action.payload;
      })
      .addCase(fetchCryptocurrencies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
