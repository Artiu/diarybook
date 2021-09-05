import postsSlice, { addPost, editPost, removePost } from "./postsSlice";

jest.mock('@reduxjs/toolkit', () => {
    const originalModule = jest.requireActual('@reduxjs/toolkit');
    return {
        ...originalModule,
        nanoid: () => 1
    }
});

describe('should test posts slice reducers', () => {

    const initialState = [{
        id: 1,
        title: "Some title",
        description: "Soem description",
    },
    {
        id:2,
        title: "Second title",
        description: "Second description"
    }];

    it('should test is new post is added', () => {
        const date = new Date(1630700224119);
        jest.spyOn(global, 'Date').mockImplementation(() => date);
        expect(postsSlice([], addPost({
            title: "Some title",
            description: "Soem description"
        }))).toEqual([{
            id: 1,
            title: "Some title",
            description: "Soem description",
            date
        }])
    })

    it('should test is post being removed', () => {
        expect(postsSlice(initialState, removePost({ id: 1 }))).toEqual([{
            id:2,
            title: "Second title",
            description: "Second description"
        }])
    })

    it('should test is post edited', () => {
        const dataToEdit = {
            id:2,
            title: 'New title',
            description: 'New description'
        }
        expect(postsSlice(initialState, editPost(dataToEdit))).toEqual([
            {
                id: 1,
                title: "Some title",
                description: "Soem description",
            },
            dataToEdit
        ])
    })
})