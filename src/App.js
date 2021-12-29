import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Home/Dashboard/Dashboard';
import Login from './components/Home/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import MyOrder from './components/Home/MyOreder/MyOrder';
import ManageOrder from './components/Home/ManageOrder/ManageOrder';
import MakeAdmin from './components/Home/MakeAdmin/MakeAdmin';
import Registration from './components/Home/Register/Register';
import AdminRoute from './components/Home/AdminRoute/AdminRoute';
import CreateAdmin from './components/Home/CreateAdmin/CreateAdmin';
import AddService from './components/AddService/AddService';
import Details from './components/Home/Details/Details';
import Myorder from './components/Home/Myorder/Myorder';
import Navigations from './components/Home/Navigations/Navigations';
import AllUsers from './components/Home/Home/AllUsers/AllUsers';
import Myprofile from './components/Home/Myprofile/Myprofile';
import ManageService from './components/ManageService/ManageService';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigations></Navigations>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/addService" element={<AddService />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/myorder" element={<Myorder />}></Route>
            <Route path="/myProfile" element={<Myprofile />}></Route>
            <Route path="/details/:serviceId" element={<PrivateRoute>
              <Details></Details>
            </PrivateRoute>} />
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/admin" element={<AdminRoute />}></Route>
            {/* <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route> */}
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="/dashboard/order" element={<MyOrder />}></Route>
              <Route path="/dashboard/AllUsers" element={<AllUsers />}></Route>

              <Route path="/dashboard/manageOrder" element={<ManageOrder></ManageOrder>}></Route>
              {/* <Route path="/dashboard/AllServiceManage" element={<AllServiceManage />}></Route> */}
              <Route path="/dashboard/superAdmin" element={<MakeAdmin />} />

              <Route path="/dashboard/createAdmin" element={<CreateAdmin />}></Route>
              <Route path="/dashboard/manageService" element={< ManageService />}>

              </Route>
            </Route>


          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
