import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import PostId from './pages/PostId';
import List from './pages/list-page';
import PostIdMessage from './pages/post-id-message-page/PostIdMessage';
import Post from './pages/post-page/Post';
import Layout from './pages/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='post' element={<Post />} />
        <Route path='list' element={<List />} />
        <Route path='post/:id'>
          <Route index element={<PostId />} />
          <Route path='message' element={<PostIdMessage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
