import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import UserList from './page/UserList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/users' element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
