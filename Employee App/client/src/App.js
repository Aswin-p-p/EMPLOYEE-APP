import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Addemploye from './components/Addemploye/Addemploye';
import Viewuser from './components/viewuser/Viewuser';
import Update from './components/update/Update';
import Login from './components/Login/Login';
import Profile from './components/profile/Profile';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>}></Route>
  <Route path='/add' element={<Addemploye/>}></Route>
  <Route path='/viewuser' element={<Viewuser/>}></Route>
  <Route path='/updateuser/:id' element={<Update/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>


  
</Routes>


</BrowserRouter>


</>

  );
}

export default App;
