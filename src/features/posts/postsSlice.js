import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
    id:'1',
    title:"Some title",
    description: "Some description",
    date: new Date(),
},
{
    id:'2',
    title:"Some title",
    description: "Some description",
    date: new Date(),
}
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addPost: (state, action) => {
            state.push({
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
        }
    }
})

export const { addPost, removePost, editPost } = postsSlice.actions;

export default postsSlice.reducer;