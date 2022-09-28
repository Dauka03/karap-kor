import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminPanel.css"
import UserData from "./UserData";
import {Routes, Route} from 'react-router-dom'
import UserTable from "./UserTable";
import { useEffect } from "react";
function AdminPanelCompanyData(props){
    const {companyData} = props;  
    const [users, setUsers] = useState(companyData);

    // useEffect(() => {
        
    //   }, [])
    if(!companyData||companyData.length===0){
        return <p>No data.</p>
    }
    const companyDelete=(key)=>{
        companyData.map((item)=>{
            if(item._id === key){
                axios.delete(`https://secure-temple-40348.herokuapp.com/api/company/${item._id}`).then((response)=>{
                    console.log(response.data);
                    setUsers([...users, response.data])
                    return {...users}

                })
            }
            else{return users}
        })
    }
    
    // const verifiedUsers = usersData.filter((user) => !user.verified||user.verified);

    // function verifiedClick(key){
    //     companyData.map((item)=>{
    //         if(item._id === key){
    //             if(item.verified===true){
    //             item.verified=false;
    //             }
    //             else if(item.verified===false){
    //                 item.verified=true;
    //             }
    //             axios.put(`http://localhost:5000/api/usersdata/`,item).then((response)=>{
    //                 console.log(response.data);
    //                 setUsers([...users, response.data])
    //             })
    //         }
    //     })
    // }
    // function userDelete(key){
    //     companyData.map((item)=>{
    //         if(item._id === key){
    //             axios.delete(`http://localhost:5000/api/usersdata/${item._id}`).then((response)=>{
    //                 console.log(response.data);
    //                 setUsers([...users, response.data])
    //                 return {...users}

    //             })
    //         }
    //         else{return users}
    //     })
    // }
    return(
        <div>
            <h1>Company Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>company_id</th>
                        <th>company_name</th>
                        <th>usersData</th>

                    </tr>
                </thead>
                <tbody>
                    {companyData.map((item)=>(
                        <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.company_name}</td>
                        <td>
                            <Link to={`${item.company_name}`}>Open</Link>
                            <Routes>
                                <Route path={`${item.company_name}`} element={<UserTable usersData={item.users_data}/>}/>
                            </Routes>
                        </td>
                        <td><button onClick={()=>companyDelete(item._id)}>Delete</button></td>

                        {/* <td>{person.users_data}</td> */}


                       
                        </tr>                        
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default AdminPanelCompanyData