import React, { useEffect, useState } from 'react'
import './resellerinfo.css'
import Axios from 'axios'
import Navbar from '../navbar/Navbar'
import { useParams, Link ,useNavigate} from 'react-router-dom';


const Resellerinfo = () => {

    const id = useParams();
    const [data, setdata] = useState("")
    const [CurrentData, setCurrentData] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        for (var i = 0; i < data.length; i++) {
            // console.log(id.id)
            if (data[i].einno == id.id) {
                setCurrentData(data[i])
                // console.log(CurrentData)

            }
        }
    }, [data])


    useEffect(() => {
        const username=JSON.parse(localStorage.getItem('username'));
        const password=JSON.parse(localStorage.getItem('password'));
        Axios.post('http://localhost/backend_with_php/Login.php', ({ username: username, password: password })).then((Response) => {
        console.log(username+password)
            if(Response.data!=='Welcome'){
               navigate('/');
               console.log("done")
            }
            })



        Axios.get("http://localhost/backend_with_php/Readinfo.php").then(res => {
            setdata(res.data)
            // console.log(res.data)
        }).then(() => {

        }).catch(err => {
            console.log(err);
        })
    }, [])

    const DeleteUser = () => {
        Axios.post('http://localhost/backend_with_php/Remove.php', ({ einno: id.id })).then((Response)=>{
            
            navigate('/reseller');
        });
    }

    return (
        <>
            <Navbar />
            <div className='reseller'>
                <h1>Reseller Information</h1>
                <div className="reseller_detiles">
                    <div className="ein"><span> EIN Number:</span>{CurrentData.einno}</div>
                    <div className="name_reseller"><span> Reseller Name:</span> {CurrentData.name}</div>
                    <div className="email_reseller"><span> Email Address:</span> {CurrentData.email}</div>
                    <div className="phone_number"><span> Phone Number:</span>{CurrentData.phone}</div>
                    <div className="commission"><span> Commission :</span> {CurrentData.commission}%</div>
                    <div><Link className="delete" onClick={DeleteUser}>Delete Reseller</Link></div>
                </div>
            </div>
        </>
    )
}

export default Resellerinfo