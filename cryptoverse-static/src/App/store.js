import {configureStore} from '@reduxjs/toolkit';
import CryptoReducer from '../features/cryptoSlice.jsx';

export const store = configureStore({
    reducer: {
        crypto:CryptoReducer,
    },
})