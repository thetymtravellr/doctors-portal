import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment.js/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/appointment' element={
       <RequireAuth>
        <Appointment></Appointment>
       </RequireAuth>}/>
       <Route path='/dashboard' element={
       <RequireAuth>
        <Dashboard></Dashboard>
       </RequireAuth>}>
         <Route index element={<MyAppointments/>} />
         <Route path='review' element={<MyReview/>} />
         <Route path='history' element={<MyHistory/>} />
         <Route path='users' element={<RequireAdmin>
          <Users/>
         </RequireAdmin>} />
       </Route>
       <Route path='/about' element={<About/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
     </Routes>
     <ToastContainer/>
    </div>
  );
}

export default App;
