import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AddPostForm from './components/addPostForm';
import Posts from './components/Posts';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/">
          <Posts/>
        </Route>
        <Route path="/posts/add">
          <AddPostForm/>
        </Route>
        <Route path="/posts/:id">

        </Route>
        <Route path="/posts/edit">

        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
