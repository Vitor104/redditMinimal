import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';

function App() {
  return (
    <Routes>
     <Route path='/' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
