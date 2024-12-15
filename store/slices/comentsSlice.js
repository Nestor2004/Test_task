import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронна дія для отримання коментарів
export const fetchComments = createAsyncThunk('comments/fetchComments', async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return response.json();
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default commentsSlice.reducer;