import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import PostedPage from './pages/PostedPage';
import List from './pages/List';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/posted-page' element={<PostedPage />} />
      <Route path='/list' element={<List />} />
    </Routes>
  );
}

export default App;
