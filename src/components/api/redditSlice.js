import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk for fetching Reddit data
export const fetchReddit = createAsyncThunk(
    'reddit/fetchReddit',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const data = await response.json();
        return data.data.children; // Returning the children array which contains the posts
    }
);

// Create a slice
const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        loading: false,
        data: [],
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReddit.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchReddit.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchReddit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default redditSlice.reducer;
