import { useParams } from "react-router-dom";
import {Routes, Route, Link} from 'react-router-dom'
import TagSalaryTable from "./TagSalaryTable";
import "./AdminPanel.css"

function TagData(props){
    const {companyData} = props;
    const {id} = useParams();
    if (!companyData || companyData.length === 0) {
        return <p>No data.</p>;
      }
    const data = companyData.find((data) => data._id === id)
    const userData = data.users_data
    const tagData = []
    userData.map((item)=>{
        tagData.push(item.tag)
    })
    const uniqueArray = tagData.filter(function(item, pos) {
        return tagData.indexOf(item) == pos;
    })
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
              width: "75vw",
              borderBottom: "2px solid gray",
              justifyContent: "space-around",
              marginLeft: "20px",
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
              <h3>Compansation at {data.company_name}</h3>
              {uniqueArray.map((item) => (
                <Link
                  style={{
                    backgroundColor: "#EDF2F7",
                    padding: "20px 60vw 20px 20px",
                    marginBottom: "20px",
                  }}
                  key={item}
                  to={`/companydata/${data._id}/tag/${item}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default TagData