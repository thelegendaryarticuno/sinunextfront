import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Event } from './types'; // Ensure Event interface includes `prizes` as an optional array

interface EventState {
  eventData: Event | null;
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  eventData: null,
  loading: false,
  error: null,
};

// Async thunk to fetch event data by eventId
export const fetchEventData = createAsyncThunk<Event, string, { rejectValue: string }>(
  'event/fetchEventData',
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.sinusoid.in/events/${eventId}`);
      return response.data as Event;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching event data');
    }
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    // Reducer to manually set event data
    setEventData(state, action: PayloadAction<Event>) {
      state.eventData = action.payload;
    },
    // Optional reducer to reset event data (if needed)
    resetEventData(state) {
      state.eventData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventData.fulfilled, (state, action: PayloadAction<Event>) => {
        state.loading = false;
        state.eventData = action.payload;
      })
      .addCase(fetchEventData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Exporting actions and reducer
export const { setEventData, resetEventData } = eventSlice.actions;
export default eventSlice.reducer;
