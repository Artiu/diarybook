import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AddPostForm from './components/addPostForm';
import Post from './components/Post';
import Posts from './components/Posts';

function App() {
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
          <Route path="/posts/:id">
            <Post/>
          </Route>
          <Route path="/posts/edit">
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
