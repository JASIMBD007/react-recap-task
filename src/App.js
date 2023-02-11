import { Route, Routes } from 'react-router-dom';
import './App.css';
import Activity from './components/Activity/Activity';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Volunteers from './components/Volunteers/Volunteers';

function App () {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/home' element={<Home />} />
        <Route path='/volunteers' element={<Volunteers />} />
      </Routes>
    </div>

  );
}

export default App;
