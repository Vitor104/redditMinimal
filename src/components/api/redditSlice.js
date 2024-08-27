import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  subreddits: [],
  posts: [],
  status: 'idle',
  error: null
};

// Async thunk to fetch subreddits
export const fetchSubreddits = createAsyncThunk(
  'reddit/fetchSubreddits',
  async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json');
    const data = await response.json();
    return data.data.children.map((subreddit) => subreddit.data);
  }
);

// Async thunk to fetch subreddit posts
export const fetchPosts = createAsyncThunk(
  'reddit/fetchPosts',
  async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`);
    const data = await response.json();
    return data.data.children.map((post) => post.data);
  }
);

// Create the slice
const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default redditSlice.reducer;
