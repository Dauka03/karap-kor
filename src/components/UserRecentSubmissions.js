 import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Route,Routes,Link } from 'react-router-dom';

function UserRecentSubmissions(props){
    const {usersData} = props
    const now = new Date()
    const minute = Math.floor((now-new Date(usersData.creatted_date))/1000/60)
    const time = ()=>{
      if(minute>=60){
        return (
          <span style={{display:"flex", justifyContent:"center"}}>
            
            <p>
            <i className="fa fa-clock-o" style={{marginRight:"5px"}} aria-hidden="true"></i> 
            {(Math.floor(minute/60))} hours ago
            </p>
          </span>
        )
      }
      else return (
        <div>
            {/* style={{display:"flex", justifyContent:"center"}} */}
            <p>
            <i className="fa fa-clock-o" style={{marginRight:"5px"}} aria-hidden="true"></i> 
            {(Math.floor(minute))} minutes ago
            </p>
          </div>
      )
    }

     
  return(
        <>
    <Card sx={{ maxWidth: 255, width:185, height:140}}>
    <Typography variant="subtitle2" color="text.secondary">
            {time()}
    </Typography>
    <Link to={'/viewall'}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {usersData.company_name}
          </Typography>
          <Typography variant="subtitle" color="text.secondary">
            {usersData.salary}tg
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {usersData.level_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
          </>
    )
}

export default UserRecentSubmissions