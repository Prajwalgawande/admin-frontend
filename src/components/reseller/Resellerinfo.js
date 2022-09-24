import React, { useEffect, useState } from 'react'
import './resellerinfo.css'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import { useParams } from 'react-router-dom';


const Resellerinfo = () => {

    const id = useParams();
    const [data, setdata] = useState("")
    const [CurrentData, setCurrentData] = useState("");


useEffect(() => {
    for (var i=0 ; i < data.length ; i++)
    {
        // console.log(id.id)
        if (data[i].einno == id.id) {
            setCurrentData(data[i])
            // console.log(CurrentData)
        
        }
    }
}, [data])


useEffect(() => {
    axios.get("http://localhost:3001/viewuser").then(res => {
        setdata(res.data)
        // console.log(res.data)
    }).then(()=>{
        
    }).catch(err => {
        console.log(err);
    })
}, [])

return (
    <>
        <Navbar />
        <div className='reseller'>
            <h1>Reseller Information</h1>
            <div className="reseller_detiles">
                <div className="ein"><span> EIN Number:</span>{CurrentData.einno}</div>
                <div className="name_reseller"><span> Reseller Name:</span> {CurrentData.name}</div>
                <div className="email_reseller"><span> Email Address:</span> {CurrentData.email}</div>
                <div className="phone_number"><span> Phone Number:</span>{ CurrentData.phone}</div>
                <div className="commission"><span> Commission :</span> {CurrentData.commission}%</div>
            </div>
        </div>
    </>
)
    }

export default Resellerinfo