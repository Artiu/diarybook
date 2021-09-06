import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: (state, action) => {
            state.unshift({
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
                date: new Date(),
            })
        },
        removePost: (state, action) => {
            return state.filter((post)=>post.id !== action.payload.id);
        },
        editPost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index].title = action.payload.title;
            state[index].description = action.payload.description;
        },
        loadPosts: () => {
            let store = JSON.parse(localStorage.getItem("store"));
            if(store){
                store.posts.forEach((post) => {
                    post.date = new Date(post.date);
                })
                return store.posts;
            }
            return [];
        }
    }
})

export const { addPost, removePost, editPost, loadPosts } = postsSlice.actions;

export default postsSlice.reducer;