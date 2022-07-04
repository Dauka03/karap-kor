// import axios from "axios";
// import { useEffect, useState } from "react";

function UserData(props){
  const { usersData } = props;
  // const [users, setUsers] = useState(usersData);
  
  // const [age, setAge] = useState("");
  // const [salary, setSalary] = useState("");
  // const [jobTitle, setJobTitle] = useState("");
  // const [companyName, setCompanyName] = useState("");
  // const [stackTechnology, setStackTechnology] = useState("");
  // useEffect(() => {
  //   console.log(usersData, " changing")
  //   setUsers(usersData)
  // }, [usersData])
  
  if (!usersData || usersData.length === 0) {
    return <p>No data.</p>
  }

  // const onCreateClick = () => {
  //   axios
  //     .post("http://localhost:5000/api/users", {
  //       age,
  //       salary,
  //       jobTitle,
  //       companyName,
  //       stackTechnology,
  //       creatted_date: new Date().toISOString(),
  //       verified: false,
  //     })
  //     .then((response) => {
  //       setUsers([...usersData, response.data]);
  //     });
  // };

  return (
    <div>
      {/* <input
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
        value={jobTitle}
        onChange={(event) => {
          setJobTitle(event.target.value);
        }}
        placeholder="job title"
      />
      <input
        value={companyName}
        onChange={(event) => {
          setCompanyName(event.target.value);
        }}
        placeholder="company name"
      />
      <input
        value={stackTechnology}
        onChange={(event) => {
          setStackTechnology(event.target.value);
        }}
        placeholder="stack technology"
      />
      <button onClick={onCreateClick}>Create</button> */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>age</th>
            <th>salary</th>
            <th>job title</th>
            <th>company name</th>
            <th>stack technology</th>
            <th>creatted date</th>
            <th>verified</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((person) => (
            <tr key={person._id}>
              <td>{person._id}</td>
              <td>{person.age}</td>
              <td>{person.salary}</td>
              <td>{person.job_title}</td>
              <td>{person.company_name}</td>
              <td>{person.stack_technology}</td>
              <td>{person.creatted_date}</td>
              <td>{person.verified.toString()}</td>
              <td>{person.updatted_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default UserData