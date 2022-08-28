import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UserData from './components/UserData';
// import OnLoadingUserData from './components/OnLoadingPersonsData';
import {Routes, Route, Link} from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'
import HomePage from './pages/HomePage';
import Reg from './pages/Reg';
import UserTable from './components/UserTable';
import UserDataDetail from './components/UserDataDetails';
import UserCreate from './components/UserCreate';
import CompanyDetail from './components/CompanyDetail';
import TagData from './components/TagData';
import TagSalaryTable from './components/TagSalaryTable';

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
  const now = new Date()

  const verifiedUsers = usersData.filter((data)=>data.verified)
  const usersSorted = verifiedUsers.sort((data)=>Math.floor((now-new Date(data.creatted_date))/1000/60))

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
console.log(isAuth);
  return (
    <>
      <div className='App-header'>
      <Link to='*'><h4 style={{color:'white', padding:'15px'}}>KARAP-KOR</h4> </Link>
      {isAuth?<Link className='admin' to='/admin' style={{color:'white', padding:'15px'}}>AdminPanel</Link>:""}
      
      <Link to='/signup' style={{color:'white', padding:'15px'}}>Sign Up</Link></div>
      <div className="App">
      <Routes>
        <Route path='*' element={<HomePage usersData={usersData} companyData={companyData} />}/>
        <Route path="/admin/*" element={<AdminPanel usersData={usersData} companyData={companyData} setCompanyData={setCompanyData}/>}/>
        <Route path='signup' element={<Reg isAuth={isAuth} setAuth={setAuth}/>}/>
        <Route path='/viewall' element={<UserTable usersData={verifiedUsers}/>}/>
        <Route path='/userdetail/:id' element={<UserDataDetail usersData={verifiedUsers}/>}/>
        <Route path='/form' element={<UserCreate companyData={companyData}/>}/>
        <Route path='/companydata/:id/*' element={<CompanyDetail companyData={companyData}/>}/>
        <Route path={`/companydata/:id/tag/*`} element={<TagData companyData={companyData}/>}></Route>
        <Route path="/companydata/:id/tag/:item" element={<TagSalaryTable companyData={companyData}/>}></Route>

      </Routes>
      </div>
      </>
  );      

}

export default App;
