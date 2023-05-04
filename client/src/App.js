import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Result from './Components/Result';
import Rules from './Components/Rules';
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Header/Navbar';
import DataProvider from './Components/DataContext';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Table from './Components/Table';
import { CheckUserExist } from './hepler/helper';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/table' element={<Table></Table>} />
          <Route path='/result' element={<CheckUserExist><Result/></CheckUserExist>} />
          <Route path='/quiz' element={<CheckUserExist><Quiz/></CheckUserExist>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
