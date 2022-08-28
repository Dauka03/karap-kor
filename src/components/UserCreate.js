import axios from "axios";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function UserCreate(props){
    // const [users, setUsers] = useState(usersData);
  const {companyData} = props
  const users_data = []
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [level_name, setLevelName] = useState("");
  const [tag, setTag] = useState("");
  const [work_arrangement, setWorkArrangement] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [stack_technology, setStackTechnology] = useState("");
  const [years_experience_company, setYearsExperienceCompany] = useState("");
  const [years_experience_total, setYearsExperienceTotal] = useState("");
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
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onCreateClick = () => {
        axios
          .post("http://localhost:5000/api/usersdata", {
            age,
            salary,
            level_name,
            tag,
            company_name,
            stack_technology,
            creatted_date: new Date(),
            verified: false,
            work_arrangement,
            years_experience_company,
            years_experience_total
          })
          .then((response) => {
            // setUsers([...usersData, response.data]);
            // alert(response.data._id+" Ваша заявка в обработке")
            setOpen(true)
            setId(response.data._id)
            console.log(response.data);
          });
      };

      const updateCompany = (company_name) => {
        let count = 0
        let lengthCom = companyData.length
        companyData.map((company) => {
          if (company.company_name !== company_name) {
            count++;
          }
        });
        if(count===lengthCom){
          createCompany(company_name)
        }
      } 
      const createCompany = (company_name)=>{
        const apiUrl = "http://localhost:5000/api/company";
        axios
        .post(apiUrl, { company_name, users_data })
        .then((response) => {});
      }
      return(
        <>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User {id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your request is being processed
          </Typography>
        </Box>
      </Modal>
        <input
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
        placeholder="age"
      />
      <input
        value={salary}
        onChange={(event) => {
          setSalary(event.target.value);
        }}
        placeholder="salary"
      />
      <input
        value={level_name}
        onChange={(event) => {
          setLevelName(event.target.value);
        }}
        placeholder="level name"
      />
       <input
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
        placeholder="tag"
      />
      <input
        value={work_arrangement}
        onChange={(event) => {
          setWorkArrangement(event.target.value);
        }}
        placeholder="remote, office"
      />
      <input
        value={company_name}
        onChange={(event) => {
          setCompanyName(event.target.value);
        }}
        placeholder="company name"
      />
      <input
        value={years_experience_company}
        onChange={(event) => {
          setYearsExperienceCompany(event.target.value);
        }}
        placeholder="Years of experience at this company"
      />
      <input
        value={years_experience_total}
        onChange={(event) => {
          setYearsExperienceTotal(event.target.value);
        }}
        placeholder="Years of experience total"
      />
      <input
        value={stack_technology}
        onChange={(event) => {
          setStackTechnology(event.target.value);
        }}
        placeholder="stack technology"
      />
      <button onClick={()=>[onCreateClick(),updateCompany(company_name)]}>Create</button>
        </>
      )
}

export default UserCreate