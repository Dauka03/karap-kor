import axios from "axios";
import { useState } from "react";
import "./AdminPanel.css"

function AdminPanelUsersData(props){
    const {usersData, companyData, setCompanyData} = props;  
    const [users, setUsers] = useState(usersData);

    // useEffect(() => {
    //     setUsers(usersData)
    //   }, [users])
    if(!usersData||usersData.length===0){
        return <p>No data.</p>
    }
    
    // const verifiedUsers = usersData.filter((user) => !user.verified||user.verified);

    function verifiedClick(key){
        usersData.map((item)=>{
            if(item._id === key){
                if(item.verified===true){
                item.verified=false;
                }
                else if(item.verified===false){
                    item.verified=true;
                }
                axios.put(`https://secure-temple-40348.herokuapp.com/api/usersdata`,item).then((response)=>{
                    console.log(response.data);
                    setUsers([...users, response.data])
                })
            }
        })
    }
    const verifiedUsers = usersData.filter((data)=>data.verified===false)
    const addUsersToCompany = (key) => {
        console.log("OK");

        verifiedUsers.map((item)=>{
            if(item._id===key){
            companyData.map((itemCom)=>{
                if(item.company_name===itemCom.company_name){
                    console.log(itemCom.users_data.verified);
                    // if(itemCom.users_data.verified===false){
                    itemCom.users_data.push(item)
                    // console.log("AAA");
                    updateCompany(itemCom)
                    // }
                    
                    
                }
            })
            }
          })
      }
      const updateCompany = (item) => {
        const apiUrl = 'https://secure-temple-40348.herokuapp.com/api/company'
        axios.put(apiUrl, item).then((response)=>{
            setCompanyData(companyData.map((company) => {
                if(company._id === response.data._id) return response.data;
                return company
            }))
        })
      } 
    
    function userDelete(key){
        usersData.map((item)=>{
            if(item._id === key){
                axios.delete(`https://secure-temple-40348.herokuapp.com/api/usersdata/${item._id}`).then((response)=>{
                    console.log(response.data);
                    setUsers([...users, response.data])
                    return {...users}

                })
            }
            else{return users}
        })
    }
    return(
        <div>
            <h1>Users Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>age</th>
                        <th>salary</th>
                        <th>level name</th>
                        <th>tag</th>
                        <th>company name</th>
                        <th>stack technology</th>
                        <th>creatted date</th>
                        <th>verified</th>

                    </tr>
                </thead>
                <tbody>
                    {usersData.map((person)=>(
                        <tr key={person._id} className={`${person.verified? "person_verified" : ""}`}>
                        <td>{person._id}</td>
                        <td>{person.age}</td>
                        <td>{person.salary}</td>
                        <td>{person.level_name}</td>
                        <td>{person.tag}</td>
                        <td>{person.company_name}</td>
                        <td>{person.stack_technology}</td>
                        <td>{person.creatted_date}</td>
                        <td>{person.verified.toString()}</td>
                        <td><button onClick={()=>[verifiedClick(person._id),addUsersToCompany(person._id)]}>Click</button></td>
                        <td><button onClick={()=>userDelete(person._id)}>Delete</button></td>
                        {/* <td><button onClick={()=>addUsersToCompany(person._id)}>Add to company</button></td> */}
                        </tr>                        
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default AdminPanelUsersData