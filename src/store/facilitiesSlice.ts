import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ENDPOINTS } from '../constants/apisConstants';

export const fetchFacilities = createAsyncThunk(
  'facilities/fetchFacilities',
  async () => {
    try {
      console.log('URL:', ENDPOINTS.FACILITIES);
      const res = await fetch(`${ENDPOINTS.FACILITIES}`);
      const json = await res.json(); // lưu vào biến
      console.log('❤️ res:', json); // log biến
      return json; // return biến
    } catch (error) {
      console.log('❌ Lỗi fetch:', error);
      throw error;
    }
  },
);

interface FacilitiesState {
  loading: boolean;
  data: any[] | null;
  error: string | null;
}

const initialState: FacilitiesState = {
  loading: false,
  data: [],
  error: null,
};

const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState,
  reducers: {}, // reducers đồng bộ nếu cần
  extraReducers: builder => {
    builder
      .addCase(fetchFacilities.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFacilities.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
        state.data = action.payload.data;
      })
      .addCase(fetchFacilities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Lỗi không xác định';
      });
  },
});

export default facilitiesSlice.reducer;
