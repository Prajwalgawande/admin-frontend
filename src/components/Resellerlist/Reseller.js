import React, { useEffect, useState } from 'react'
import './Reseller.css'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import {Link} from 'react-router-dom'


const Reseller = () => {
   const [data, setdata] = useState("")
    useEffect(() => {
        axios.get("http://localhost:3001/viewuser").then(res => {
            setdata( res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <>
        <Navbar/>
        <div className='course'>
            <div className="top_bar">
                <div className="navigation"> <span>
                    &gt;</span>  Resller</div>
            </div>
            <div className="top_reseller">
                <h1>Reseller</h1>
                <Link className='addreseller' to='/updateseller'>+ Add New Reseller</Link>
            </div>
            <div className="reseller_lists">
                <div className="seller_name_id">Seller Name & Id</div>
                <div className="left_side">
                    <div className="unbilled_payment">UNBILLED PAYMENT</div>
                    <div className="earning">TOTAL EARNING</div>
                    <div className="client">CLIENTS</div>
                    <div className="active_sinnce">ACTIVE SINCE</div>
                    <div className="last_login">lAST lOGIN</div>
                </div>
            </div>
            {data && data.map(item => {
                return(
                <Link to={`/resellerinfo/${item.einno}`} key={item.einno} className="reseller_lists" >
                    <div className="seller_name_id">
                        {item.name} <br />
                       <span className="einno">#{item.einno}</span> 
                    </div>
                    <div className="left_side">
                        <div className="unbilled_payment">USD$ 0</div>
                        <div className="earning">USD$ 10</div>
                        <div className="client">0</div>
                        <div className="active_sinnce">JAN 21 , 2022</div>
                        <div className="last_login">feb 19 ,2022</div>
                    </div>
                </Link>);
            })}

        </div>
        </>
    )
}

export default Reseller