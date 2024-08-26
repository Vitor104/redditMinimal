import { configureStore } from '@reduxjs/toolkit';
import redditReducer from './redditSlice'; // This is where we'll create our slice

const Store = configureStore({
    reducer: {
        reddit: redditReducer,
    },
});

export default Store;