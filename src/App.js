import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UserData from './components/UserData';
// import OnLoadingUserData from './components/OnLoadingPersonsData';
import {Routes, Route, Link} from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'
import HomePage from './pages/HomePage';
import Reg from './pages/Reg';
function App() {
  // const DataLoading = OnLoadingUserData(UserData);

  const [isAuth, setAuth] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  const getUsers = () => {
    const apiUrl = 'http://localhost:5000/api/usersdata'
    axios.get(apiUrl).then((response)=>{
      setUsersData(response.data)
    })
  }

  const verifiedUsers = usersData.filter((data)=>!data.verified)

  const getCompany = () => {
    const apiUrl = 'http://localhost:5000/api/company'
    axios.get(apiUrl).then((response)=>{
      setCompanyData(response.data)
    })
  }

  
useEffect(()=>{
  getUsers()
},[])

useEffect(()=>{
  getCompany()
},[])

// useEffect(()=>{
//   addUsersToCompany()
// },[addUsersToCompany])

  return (
    <div className="App">
      <Link to='/'>HomePage</Link>
      <Link to='/admin'>AdminPanel</Link>
      <Link to='/signup'>Sign Up</Link>
      
      <Routes>
        <Route path='/' element={<HomePage usersData={usersData} />}/>
        <Route path="/admin/*" element={<AdminPanel usersData={usersData} companyData={companyData} setCompanyData={setCompanyData}/>}/>
        <Route path='signup' element={<Reg isAuth={isAuth} setAuth={setAuth}/>}/>
      </Routes>
    </div>
  );
}

export default App;
