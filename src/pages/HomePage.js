import '../App.css';
import React, {  useState } from 'react';
// import axios from 'axios'
import UserData from '../components/UserData';
import UserCreate from '../components/UserCreate';
import UserRecentSubmissions from '../components/UserRecentSubmissions';
import Box from '@mui/material/Box';
import { Route,Routes,Link } from 'react-router-dom';
import UserTable from '../components/UserTable';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CompanyTable from '../components/CompanyTable';
import { useEffect } from 'react';

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
  const [width, setWidth] = useState(window.screen.width);
  const [size, setSize] = useState(0);

  const {usersData,companyData} = props
  const now = new Date()

  const verifiedUsers = usersData.filter((data)=>data.verified)
  const usersSorted = verifiedUsers.sort((data)=>Math.floor((now-new Date(data.creatted_date))/1000/60))
  const minute = Math.floor((now-new Date(verifiedUsers.creatted_date))/1000/60)
    
useEffect(()=>{
  setWidth(window.screen.witdh)
  if(width>=950){
    setSize(4)
 }
 else if(width>=800){
  setSize(3)
 }
 else if(width>=600){
  setSize(2)
 }
 else{
  setSize(1)
 }
},[])
  
 
  // const minute = Math.floor((now-new Date(usersData.creatted_date))/1000/60)
     return(
        <div className="App">
        {/* <header className="App-header">
        <h5>{verifiedUsers.length} verified users</h5>
            <h1>Hello World!</h1>
        </header> */}
        <section>
          <Box style={{display:'flex',justifyContent: 'flex-start'}}><h5>Recent Salary Submissions</h5></Box>
          <Box sx={{display:'flex',justifyContent:'space-between'}}>

          <Card sx={{border:'2px dashed #D0DEFC', maxWidth: 255, width:185, height:140}}>
          <Typography variant="subtitle2" color="text.secondary">
        <i className="fa fa-clock-o" style={{marginRight:"5px"}} aria-hidden="true"></i> 
         Now
          </Typography>
    <Link to={'/form'}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Add your Salary
          </Typography>

        </CardContent>
      </CardActionArea>
      </Link>
    </Card>

          {verifiedUsers.slice(0,size).map((user)=>(
              <UserRecentSubmissions key={user._id} usersData={user}>
              </UserRecentSubmissions>
          ))}
          </Box>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
          <Link to='/viewall'>View all</Link>
          </div>
          <CompanyTable companyData={companyData}/>
        </section>
      </div>
    )
}

export default HomePage