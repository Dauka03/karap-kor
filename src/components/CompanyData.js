// import axios from "axios";
// import { useEffect, useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserDataDropDown from "./UserDataDropDown";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function CompanyData(props) {
  const { companyData } = props;
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 4,
    p: 8,
  };
  if (!companyData || companyData.length === 0) {
    return <p>No data.</p>;
  }

  const handleOpen = (props) => {
    setOpen(true)
  };

  return (
    <React.Fragment key={companyData._id}>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Company {companyData.company_name}
          </Typography>
          <Link to={`/companydata/${companyData._id}/tag`}>
          View Salary Ranges & More
          </Link>
        </Box>
      </Modal>
      <TableRow
        onClick={() => handleOpen(companyData._id)}
        hover
        role="checkbox"
        tabIndex={-1}
      >
        
        <TableCell>
          <h5>{companyData.company_name}</h5>
        </TableCell>

        <TableCell>
          <h5>{companyData.users_data.length} users</h5>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default CompanyData;
