import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import facilitiesReducer from './facilitiesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    facilities: facilitiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;