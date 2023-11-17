import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  details: [],
  status: 'idle',
  error: null,
};

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async (searchQuery = '') => {
    const response = await axios.get(`https://api.coinranking.com/v2/coins?search=${searchQuery}`);
    return response.data;
  },
);

export const fetchDetails = createAsyncThunk(
  'crypto/fetchDetails',
  async (id) => {
    const response = await axios.get(`https://api.coinranking.com/v2/coins/${id}`);
    console.log(response);
    return response.data;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypto.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(fetchCrypto.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = action.payload.data; // Assuming the details are under the 'coin' property
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
