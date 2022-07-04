import axios from "axios";
import { useState } from "react";

function UserCreate(){
    // const [users, setUsers] = useState(usersData);
  
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [stack_technology, setStackTechnology] = useState("");

    const onCreateClick = () => {
        axios
          .post("http://localhost:5000/api/usersdata", {
            age,
            salary,
            job_title,
            company_name,
            stack_technology,
            creatted_date: new Date().toISOString(),
            verified: false,
          })
          .then((response) => {
            // setUsers([...usersData, response.data]);
            alert(response.data._id+" Ваша заявка в обработке")
            console.log(response.data);
          });
      };
      return(
        <>
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
        value={job_title}
        onChange={(event) => {
          setJobTitle(event.target.value);
        }}
        placeholder="job title"
      />
      <input
        value={company_name}
        onChange={(event) => {
          setCompanyName(event.target.value);
        }}
        placeholder="company name"
      />
      <input
        value={stack_technology}
        onChange={(event) => {
          setStackTechnology(event.target.value);
        }}
        placeholder="stack technology"
      />
      <button onClick={onCreateClick}>Create</button>
        </>
      )
}

export default UserCreate