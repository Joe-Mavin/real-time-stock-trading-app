import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import stockReducer from '../features/stocks/StockSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    stocks: stockReducer,
  },
});

export default store;

