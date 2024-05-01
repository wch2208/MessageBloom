import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import PostedPage from './pages/PostedPage';
import MessageForm from './pages/MessageForm';
import MessageBackgroundForm from './pages/MessageBackgroundForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/posted-page' element={<PostedPage />} />
      <Route path='/post/:id/message' element={<MessageForm />} />
      <Route path='/post' element={<MessageBackgroundForm />} />
    </Routes>
  );
}

export default App;
