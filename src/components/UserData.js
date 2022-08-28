// import axios from "axios";
// import { useEffect, useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { useEffect, useState } from "react";
import UserDataDropDown from "./UserDataDropDown";

function UserData(props) {
  const { userData } = props;
  const [open, setOpen] = useState(false);

  if (!userData || userData.length === 0) {
    return <p>No data.</p>;
  }

  const handleOpen = (props) => {
    if (userData._id === props) {
      setOpen(!open);
    }
  };

  return (
    <React.Fragment key={userData._id}>
      <TableRow
        onClick={() => handleOpen(userData._id)}
        hover
        role="checkbox"
        tabIndex={-1}
      >
        <TableCell>
          <h5>{userData.company_name}</h5>
        </TableCell>

        <TableCell>
          <div>
            <h5>{userData.level_name}</h5>
            {userData.tag}
          </div>
        </TableCell>

        <TableCell>
          <h5>
            {userData.years_experience_company} /{" "}
            {userData.years_experience_total}
          </h5>
        </TableCell>

        <TableCell>
          <h5>{userData.salary} tg</h5>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
                <UserDataDropDown userData={userData}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default UserData;
