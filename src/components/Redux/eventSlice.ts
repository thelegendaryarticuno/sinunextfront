import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event, EventDesc } from './types';  // Import the Event and EventDesc interfaces

interface EventState {
  eventData: Event | null;
  eventDesc: EventDesc | null;  // Add eventDesc to the state
}

const initialState: EventState = {
  eventData: null,
  eventDesc: null,  // Initialize eventDesc as null
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventData(state, action: PayloadAction<Event>) {
      state.eventData = action.payload;
    },
    setEventDesc(state, action: PayloadAction<EventDesc>) {  // New reducer for eventDesc
      state.eventDesc = action.payload;
    },
  },
});

export const { setEventData, setEventDesc } = eventSlice.actions;  // Export the new action

export default eventSlice.reducer;
