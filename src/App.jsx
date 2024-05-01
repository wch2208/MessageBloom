import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import PostedPage from './pages/PostedPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/posted-page' element={<PostedPage />} />
    </Routes>
  );
}

export default App;
