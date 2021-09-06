import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AddPostForm from './components/addPostForm';
import EditPostForm from './components/editPostForm';
import Post from './components/Post';
import Posts from './components/Posts';
import { loadPosts } from './features/posts/postsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  },[dispatch])
  return (
    <div className="container mx-auto p-4">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path="/">
            <Posts/>
          </Route>
          <Route path="/add">
            <AddPostForm/>
          </Route>
          <Route path="/posts/edit/:id">
            <EditPostForm/>
          </Route>
          <Route path="/posts/:id">
            <Post/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
