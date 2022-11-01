import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import CreatePost from './Page/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
