import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import PostId from './pages/PostId';
import List from './pages/list-page';
import PostIdMessage from './pages/post-id-message-page/PostIdMessage';
import Post from './pages/post-page/Post';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/post/:id' element={<PostId />} />
      <Route path='/list' element={<List />} />
      <Route path='/post/:id/message' element={<PostIdMessage />} />
      <Route path='/post' element={<Post />} />
    </Routes>
  );
}

export default App;
