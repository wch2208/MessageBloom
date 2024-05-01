import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import PostedPage from './pages/PostedPage';
import List from './pages/List';
import PostFromPage from './pages/PostFromPage';
import PostToPage from './pages/PostToPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/posted-page' element={<PostedPage />} />
      <Route path='/list' element={<List />} />
      <Route path='/post/:id/message' element={<PostFromPage />} />
      <Route path='/post' element={<PostToPage />} />
    </Routes>
  );
}

export default App;
