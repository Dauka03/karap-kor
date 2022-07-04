import '../App.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import UserData from '../components/UserData';
import UserCreate from '../components/UserCreate';

function HomePage(props){
    // const [usersData, setUsersData] = useState([]);

    // const getUsers = () => {
    //   const apiUrl = 'http://localhost:5000/api/users'
    //   axios.get(apiUrl).then((response)=>{
    //     setUsersData(response.data)
    //   })
    // }

  // useEffect(()=>{
  //   console.log(props)
  //   const usersData = props.getUsers()
  //   console.log(usersData)
  //   setUsersData(usersData)
  // },[])

 
  const verifiedUsers = props.usersData.filter((data)=>data.verified)

    return(
        <div className="App">
        <header className="App-header">
          <UserCreate/>
        <h5>{verifiedUsers.length} verified users</h5>
            <h1>Hello World!</h1>
        </header>
        <section>
          {console.log(verifiedUsers)}
          <UserData usersData={verifiedUsers}/>
        </section>
      </div>
    )
}

export default HomePage