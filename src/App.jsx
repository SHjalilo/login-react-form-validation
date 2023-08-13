import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css'
import ErrorPage from './components/ErrorPage';


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} > </Route>
            <Route path='/signup' element={<SignUp/>} > </Route>
            <Route path='/err' element={<ErrorPage/>}  ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
