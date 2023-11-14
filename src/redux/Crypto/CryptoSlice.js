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
    try {
      const response = await axios.get(
        'https://financialmodelingprep.com/api/v3/symbol/available-cryptocurrencies?apikey=AxRASTNmr14KNNzub18PPVbKg7zHZLkb'
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
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
