import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import productReducer from "./product.slice";
import cartReducer from "./cart.slice";
import { combineReducers } from 'redux';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
})

persistStore(store);