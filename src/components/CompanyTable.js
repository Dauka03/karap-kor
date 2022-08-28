import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useEffect, useState } from "react";
import UserDataDropDown from "./UserDataDropDown";
import UserData from "./UserData";
import {Routes, Route, Link} from 'react-router-dom'
import CompanyData from "./CompanyData";

function CompanyTable(props) {
  const { companyData } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  if (!companyData || companyData.length === 0) {
    return <p>No data.</p>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    
    <div style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
      <div style={{ display: "flex",margin:'20px ' , justifyContent: "flex-end" }}>
        <Link to={'/form'} style={{backgroundColor:"#2D66D8", color:'white', padding:'5px'}}>Add a Compensation</Link>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 740 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: "#D0DEFC" }}>
                  <div>
                    <h4>Company</h4>
                    Subtitle
                  </div>
                </TableCell>

                <TableCell sx={{ backgroundColor: "#D0DEFC" }}>
                  <div>
                    <h4>Verified users</h4>
                    Subtitle
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {companyData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item)=>(
                    <CompanyData key={item._id} companyData={item}/>
                ))}      
                
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={companyData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default CompanyTable;
