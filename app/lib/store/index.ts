// import { configureStore } from '@reduxjs/toolkit'

// export const makeStore = () => {
//   return configureStore({
//     reducer: {}
//   })
// }

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']



/***************************************************************** */
import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer, { rootPersistConfig } from './rootReducer';
import { api } from './services/api';

// ----------------------------------------------------------------------

// Define the root state type using the ReturnType utility of TypeScript
export type RootState = ReturnType<typeof rootReducer>;

// Define the type for dispatching actions from the store
export type AppDispatch = typeof store.dispatch;

// const store = configureStore({
//   // Use persistReducer to enable data persistence
//   reducer: persistReducer(rootPersistConfig, rootReducer),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: false,
//     }),
// });

const createStore = (options?: ConfigureStoreOptions["preloadedState"] | undefined) =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      [...getDefaultMiddleware({ serializableCheck: false,immutableCheck: false, }).concat([api.middleware,]),],
    ...options,
  });

  const store = createStore()

// Create a persistor for data persistence using Redux Persist
const persistor = persistStore(store);

// Extract the dispatch function from the store for convenience
const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

// Create a custom useDispatch hook with typed dispatch
const useDispatch = () => useAppDispatch<AppDispatch>();

// Export the Redux store, persistor, dispatch, useSelector, and useDispatch for use in components
export { store, persistor, dispatch, useSelector, useDispatch };