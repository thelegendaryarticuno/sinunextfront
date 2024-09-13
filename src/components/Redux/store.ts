import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './eventSlice';  // Import the event reducer

export const store = configureStore({
  reducer: {
    event: eventReducer,  // Add the event reducer
  },
});

// Define RootState and AppDispatch types based on the store setup
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
