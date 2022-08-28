import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Table, TableCell, TableRow, TableHead } from "@mui/material";
import { Route,Routes,Link } from 'react-router-dom';

function UserDataDropDown(props) {
  const { userData } = props;
  return (
    <TableRow key={userData._id} sx={{ backgroundColor: "white", height: '350px' }}>
      <TableCell>
        <div style={{borderRight:'1px solid gray', paddingRight:'40px', height:'200px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div>
          <h4>{userData.company_name}</h4>
        </div>
        <div>
          <h6 style={{color:'gray'}}>{userData.tag}</h6>
        </div>
        </div>
        
      </TableCell>
      <TableCell>
        <div style={{ display: "flex" }}>
          <div style={{ borderRight:'1px solid gray', paddingRight:'40px', height:'200px',display:'flex',flexDirection:'column',justifyContent:'center' }}>
            <div>
              <h5 style={{color:'gray'}}>Level name</h5>
            </div>
            <div>
              <h4>{userData.level_name}</h4>
            </div>
            <div>
              <Link to={`/userdetail/${userData._id}`}>View All Details</Link>
              </div>
          </div>
          <div style={{ }}>
            
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Table style={{ borderRight:'1px solid gray', paddingRight:'60px', height:'200px',display:'flex',flexDirection:'column',justifyContent:'center' }}>
          <TableRow sx={{borderBottom:'2px solid gray'}}>
            <TableCell sx={{}}>
              <h6 style={{color:'gray'}}>Details</h6>
            </TableCell>
          </TableRow>
          <TableRow sx={{borderBottom:'2px solid gray'}} >
            <TableCell sx={{}}>
              <h6 style={{fontWeight:"400"}}>Title</h6>
            </TableCell>
            <TableCell sx={{}}>
              <h6>{userData.tag}</h6>
            </TableCell>
          </TableRow>
          <TableRow sx={{borderBottom:'2px solid gray'}}>
            <TableCell sx={{}}>
              <h6 style={{fontWeight:"400"}}>Work arrangement</h6>
            </TableCell>
            <TableCell>
              <h6>{userData.work_arrangement}</h6>
            </TableCell>
          </TableRow>
          <TableRow sx={{borderBottom:'2px solid gray'}}>
            <TableCell sx={{}}>
              <h6 style={{fontWeight:"400"}}>Stack technologies</h6>
            </TableCell>
            <TableCell>
              <h6>{userData.stack_technology}</h6>
            </TableCell>
          </TableRow>
          
        </Table>
      </TableCell>
      <TableCell>
        <TableCell style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
        <TableRow>
          <div style={{display:'flex', justifyContent:'center'}}>
            <h4>{userData.years_experience_company}</h4>
            <h6>yrs</h6>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <h5>At company</h5>
          </div>
        </TableRow>
        <TableRow>
        <div style={{display:'flex', justifyContent:'center'}}>
            <h4>{userData.years_experience_total}</h4>
            <h6>yrs</h6>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <h5>Experience</h5>
          </div>
        </TableRow>
      </TableCell>
      </TableCell>
    </TableRow>
    
    
  );
}

export default UserDataDropDown;
