import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import reducer from '../reducer/index';

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
    whitelist : [""]
  } 

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)


