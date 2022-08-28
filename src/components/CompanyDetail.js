import { width } from '@mui/system';
import {Routes, Route, Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import TagData from './TagData';
import UserTable from './UserTable';

function CompanyDetail(props){
    const {companyData} = props
    const {id} = useParams();
    if (!companyData || companyData.length === 0) {
        return <p>No data.</p>;
      }
    const data = companyData.find((data) => data._id === id)
    
    return(
        <>
        <div style={{display:'flex'}}>
            <div style={{borderRight:'2px solid gray', paddingRight:'40px'}}>
                <div style={{display:'flex'}}>
                <i className="fas fa-long-arrow-left mr-1"></i>
                <Link to={'/*'}>Companies</Link>
                </div>
                <div>
                    <h4>{data.company_name}</h4>
                </div>
            </div>
            <div>
                <div style={{display:'flex',width:'400px', justifyContent:'space-around'}}>
                    <Link to={`/companydata/${data._id}/`}><h5>Overview</h5> </Link>
                    <Link to={`/companydata/${data._id}/tag`}><h5>Salaries</h5></Link>
                    <Link to={'/'}><h5>Benefits</h5></Link>
                    
                </div>
                <div>
                    <Routes>

                    </Routes>
                </div>
            </div>
        </div>
        </>
    )
}

export default CompanyDetail