import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { ArticlesReducer, SavedArticleReducer } from './reducers';
//

// Middleware :: Redux Persist Config
const persistConfig = {
  key: 'MTahir',
  storage: AsyncStorage,
  whitelist: ['articles', 'savedArticles'],
  blacklist: ['navigation'],
};

// export function logCurrentStorage() {
//   AsyncStorage.getAllKeys().then((keyArray) => {
//     AsyncStorage.multiGet(keyArray).then((keyValArray) => {
//       let myStorage: any = {};
//       for (let keyVal of keyValArray) {
//         // let persistConfigElement = persistConfig[keyVal];
//         myStorage[keyVal[0]] = keyVal[1];
//       }
//       console.log(' CURRENT STORAGE::: ', myStorage);
//     });
//   });
// }
//
// logCurrentStorage();

const CombinedReducers = combineReducers({
  // user_details: rootReducer.AuthReducer,
  articles: ArticlesReducer,
  savedArticles: SavedArticleReducer,
});
//
const persistedReducer = persistReducer(persistConfig, CombinedReducers);
//
export const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger()),
);
//
export let persistor = persistStore(store);
