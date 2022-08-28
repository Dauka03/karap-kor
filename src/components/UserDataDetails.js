import './UserDataDetails.css'
import {useParams} from 'react-router-dom'
import { Route,Routes,Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useEffect } from 'react';

function UserDataDetail(props){
    const {usersData} = props
    const {id} = useParams();
    if (!usersData || usersData.length === 0) {
        return <p>No data.</p>;
      }
    const user = usersData.find((user) => user._id === id)
    return(
        <>
        <div>
            <Link to={'/viewall'}>All salaries</Link>
        </div>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <div style={{color:'gray'}}>
                    <h4>Company</h4>
                </div>
                <div>
                    <h2>{user.company_name}</h2>
                </div>

                <div style={{color:'gray'}}>
                    <h4>Level</h4>
                </div>
                <div>
                    <h2>{user.level_name}</h2>
                </div>

                <div style={{color:'gray'}}>
                    <h4>Job Family</h4>
                </div>
                <div>
                    <h2>{user.tag}</h2>
                </div>

                <div style={{color:'gray'}}>
                    <h4>Total Compensation</h4>
                </div>
                <div style={{color:'#286EFA'}}>
                    <h2>{<CountUp end={user.salary} />}tg</h2>
                </div>

                <table>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{user.tag}</td>
                    </tr>
                    <tr>
                        <td>Years of Experience</td>
                        <td>{user.years_experience_company}</td>
                    </tr>
                    <tr>
                        <td>Years at this company</td>
                        <td>{user.years_experience_total}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>undefined</td>
                    </tr>
                    <tr>
                        <td>Work Arrangement</td>
                        <td>{user.work_arrangement}</td>
                    </tr>
                    <tr>
                        <td>Education</td>
                        <td>undefined</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>undefined</td>
                    </tr>
                    <tr>
                        <td>Ethicity</td>
                        <td>undefined</td>
                    </tr>
                    <tr>
                        <td>Added date</td>
                        <td>{user.creatted_date}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserDataDetail