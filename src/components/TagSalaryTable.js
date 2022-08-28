import { useParams } from "react-router-dom";
import {Routes, Route, Link} from 'react-router-dom'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";
import "./AdminPanel.css"
import { height } from "@mui/system";

function TagSalaryTable(props){
  const { companyData } = props;
  const { id } = useParams();
  const { item } = useParams();

  if (!companyData || companyData.length === 0) {
    return <p>No data.</p>;
  }
  const data = companyData.find((data) => data._id === id);
  const userData = data.users_data;
  const usersData = userData.filter((data) => data.tag === item);
  const sortedLevelData = [];
  usersData.map((item) => {
    sortedLevelData.push(item.level_name);
  });

  const uniqueArray = sortedLevelData.filter(function (item, pos) {
    return sortedLevelData.indexOf(item) == pos;
  });
  //ВАЖНО uniqueArray must be === data.level_name !!!
  const sorttedTag = [];
  uniqueArray.map((item) => {
    const a = usersData.filter((data) => data.level_name === item);
    sorttedTag.push(a);
  });
  const sorttedInf = [];
  const stack = []
  console.log(userData);
  const countArrang = []
  let remote = 0
  let office = 0
  userData.map((item)=>{
    if(item.work_arrangement==='Remote'||item.work_arrangement==='remote'){
      remote+= 1
    }
    else if(item.work_arrangement==='Office'||item.work_arrangement==='office'){
      office+= 1
    }
  })
  countArrang.push({
    remote: remote,
    office: office 
  });
  sorttedTag.map((item) => {
    let avgSalary = 0;
    let avgAge = 0;
    let length = 0;
    let level_name = "";
    let stackTech ;
    
    item.map((data) => {
      avgSalary += data.salary;
      avgAge += data.age;
      length += 1;
      level_name = data.level_name;
      stackTech +=" "+ data.stack_technology


    });
    sorttedInf.push({
      level_name: level_name,
      avgSalary: avgSalary / length,
      avgAge: parseInt(avgAge / length),
    });
    stack.push(stackTech)
    console.log(avgSalary / length);
  });
  let newStackArr = [
    stack.map((item) => {
      let a = item.split(" ")
      return (a);
    }),
  ];
  
  let a = newStackArr.map((item)=>{
    
  })
  const arrLevelName = []
  const arrSalary = []
  const arrAge = []
  const workArrangement = ['remote','office']
  const workArr = []
  sorttedInf.map((data)=>{
    arrLevelName.push(data.level_name)
    arrSalary.push(data.avgSalary)
    arrAge.push(data.avgAge)
  })
  workArr.push(countArrang[0].remote)
  workArr.push(countArrang[0].office)
  console.log(workArr);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="company" style={{ borderRight: "2px solid gray", paddingRight: "5vw" }}>
          <div style={{ display: "flex" }}>
            <i className="fas fa-long-arrow-left mr-1"></i>
            <Link to={"/*"}>Companies</Link>
          </div>
          <div>
            <h4>{data.company_name}</h4>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              borderBottom: "2px solid gray",
              justifyContent: "space-around",
              marginLeft: "20px",
              width:'70vw'
            }}
          >
            <Link to={`/companydata/${data._id}/`}>
              <h5>Overview</h5>{" "}
            </Link>
            <Link to={`/companydata/${data._id}/tag`}>
              <h5>Salaries</h5>
            </Link>
            <Link to={"/"}>
              <h5>Benefits</h5>
            </Link>
            <Routes></Routes>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <TableContainer component={Paper}>
              <Table
                sx={{ width: '70vw' }}
                
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Levels name</TableCell>
                    <TableCell align="right">Average salary</TableCell>
                    <TableCell align="right">avg age</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sorttedInf.map((row) => (
                    <TableRow
                      key={row.level_name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.level_name}
                      </TableCell>
                      <TableCell align="right">{row.avgSalary}</TableCell>
                      <TableCell align="right">{row.avgAge}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div style={{width:'70vw', display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className="chart" style={{width:'50vw'}}>
              Average salary chart
               <BarChart arrLevelName={arrLevelName} arrData={arrSalary}/>
               </div>
               <div style={{width:'50vw'}}>
                Average age chart
               <BarChart arrLevelName={arrLevelName} arrData={arrAge}/>
               </div>
               <div style={{width:'35vw'}}>
                Remote and office chart
                <PieChart level_name={workArrangement} arrData={workArr}/>
               </div>
            
            
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default TagSalaryTable