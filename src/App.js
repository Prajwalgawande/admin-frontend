import './App.css';
import Login from './components/login/Login'
import Reseller from './components/Resellerlist/Reseller';
import Updateseller from './components/Updatereseller/Updateseller';
import Resellerinfo from './components/reseller/Resellerinfo'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/updateseller' element={<Updateseller />} />
          <Route path='/resellerinfo/:id' element={<Resellerinfo />} />
          <Route path='/reseller' element={<Reseller />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
