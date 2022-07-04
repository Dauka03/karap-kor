import axios from "axios";
import { useState } from "react";
import AdminPanelUsersData from "../components/AdminPanelUsersData";
import AdminPanelCompanyData from "../components/AdminPanelCompanyData";
import {Routes, Route, Link} from 'react-router-dom'

function AdminPanel(props){
    const {usersData} = props; 
    const {companyData} = props; 
    const {setCompanyData} = props;
    return(
        <div>
            <Link to="/admin">Users data</Link>
            <Link to="/companydata">Users data</Link>

            {/* <Routes>
            <Route path='/admin' element={<AdminPanelUsersData usersData={usersData} />}/>
            <Route path='/companydata' element={<AdminPanelCompanyData companyData={companyData} />}/>

            </Routes> */}
            <AdminPanelUsersData usersData={usersData} companyData={companyData} setCompanyData={setCompanyData}/>
            <AdminPanelCompanyData companyData={companyData}/>

           
            
        </div>
    )
}

export default AdminPanel