/**
 * For persisting the cart state, we need to use redux-persist.
 * And follow this -> https://github.com/Mohammad-Faisal/nextjs-app-router-redux-toolkit-persist-integration
 */

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from "@/slides/cartSlide"
import storage from "./storage";
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  cart: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch