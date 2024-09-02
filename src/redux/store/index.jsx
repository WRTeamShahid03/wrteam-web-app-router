import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import apiMiddleware from '../middleware/api'; // Import your custom API middleware
import settingsReducer from "../reuducer/settingSlice";
import recentBlogsDataSlice from '../reuducer/recentBlogsSlice';
import categoriesSlice from '../reuducer/categoriesSlice';
import productLayoutSlice from '../reuducer/productLayoutSlice';

const persistConfig = {
  key: 'wrteam',
  storage,
};

const rootReducer = combineReducers({
  Settings: settingsReducer,
  setRecentBlogsData: recentBlogsDataSlice,
  setCategoriesData: categoriesSlice,
  setLayoutData: productLayoutSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(
      {
        serializableCheck: false
      }
    ),
    apiMiddleware, // Add your custom middleware here
  ],
});

export const persistor = persistStore(store);
