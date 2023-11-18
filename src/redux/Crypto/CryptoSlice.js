import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async (searchQuery = '') => {
    try {
      const url = `https://api.coinranking.com/v2/coins?search=${searchQuery}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch crypto data: ${error.message}`);
    }
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
  },
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
      });
  },
});

export const { setNameReducer } = cryptoSlice.actions;
export default cryptoSlice.reducer;
