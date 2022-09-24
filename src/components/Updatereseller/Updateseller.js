import React from 'react'
import './updateseller.css'
import { useState } from 'react'
import Axios from 'axios'
import Navbar from '../navbar/Navbar'
import {Link} from 'react-router-dom'


const Updateseller = () => {
    const [name, setname] = useState('')
    const [emailaddress, setemailaddress] = useState('')
    const [phone, setphone] = useState('')
    const [commission, setcommission] = useState("")
    const [einno, seteinno] = useState("")

    const addreseller=()=>{
       if(einno) if(name) if(phone) if(commission) if(emailaddress) Axios.post('http://localhost:3001/addreseller',({name: name,emailaddress:emailaddress ,phone:phone,commission:commission,einno:einno})).then((Response)=>{
              console.log(Response)
        });
        if(!einno||!name||!phone||!commission||!emailaddress){
            alert("please fill all the detiles")
        }
    }
    
    return (
        <>
        <Navbar/>
            <div className="course">
                <h1>Add Reseller</h1>
                <p>Fields marked with * are mandatory</p>
                <div className="small-border"></div>
                <div className="row">
                    <div className="col">

                        <form action="">
                            <label htmlFor="fname">Reseller / Merchant Name*</label><br />
                            <input className="border" type="text" id="fname" name="name" placeholder="Ex: Leanne Graham"
                            onChange={(e)=>{
                                setname(e.target.value);
                            }} /><br />
                            <h5>Max 70 Characters Allowed</h5>
                            <br />
                            <label htmlFor="phone">Mobile*</label>
                            <input className="border" type="text" id="phone" name="phone" 
                            onChange={(e)=>{
                                setphone(e.target.value);
                            }}/><br />
                            <h5>10 Digit Mobile Number</h5>
                            <br />
                        </form>
                    </div>
                    <div className="col">
                        <form action="">
                            <label htmlFor="comp">Company / Organization</label><br />
                            <input className="border" type="text" id="comp" name="comp" placeholder="Ex: One Smart .INC"
                             /><br />
                            <h5>Max 100 Characters Allowed</h5>
                            <br />
                            <label htmlFor="web">Website (Optional)</label>
                            <input className="border" type="text" id="web" name="web"
                                placeholder="Ex: Company / Organization Website Url" /><br />
                            <h5>http://websiteurl.com</h5>
                            <br />
                        </form>
                    </div>
                    <div className="col">
                        <form action="">
                            <label htmlFor="email">Email Address*</label><br />
                            <input className="border" type="text" id="email" name="email" placeholder="Ex: sincere@aprl.com"
                            onChange={(e)=>{
                                setemailaddress(e.target.value);
                            }}/><br />
                            <h5>Email HTMLfor further communication</h5>
                            <br />
                            <label htmlFor="commission">Commission*(%)</label>
                            <input className="border" type="text" id="commission" name="commission" placeholder="Ex: 10"
                            onChange={(e)=>{
                                setcommission(e.target.value);
                            }} /><br />email
                            <h5>Percentage of total sales per client.</h5>
                            <br />
                        </form>
                    </div>
                </div>




                <div className="row">
                    <div className="col1">
                        <label htmlFor="lname">ID Proof*</label>
                        <input type="file" id="lname" name="lname" placeholder="Choose File" /><br />
                        <h5>Aadhaar CArd, Passport, Overseas Citizenship of India document etc.</h5>
                    </div>
                    <div className="col1">
                        <label htmlFor="ein">EIN Number *</label>
                        <input type="text" id="lname" name="lname" placeholder="Ex: 324553848"
                        onChange={(e)=>{
                            seteinno(e.target.value);
                        }}/><br />
                        <h5>Employer identification number must be 10 digit number.</h5>
                    </div>

                </div>



                <div>
                    <label htmlFor="fname">Other Info (Optional)</label><br />
                    <textarea style={{marginTop:"10px"}} className="border" rows="9" cols="107"></textarea>
                    <p>Maximum 350 characters are allowed</p>
                </div>
                <Link to='/reseller'  className="addseller" onClick={addreseller}>Add Seller</Link>
                <p>© 2022 <span style={{color:"red"}}>KORFISH.INC</span> All Rights Reserved</p>
            </div>

        </>
    )
}

export default Updateseller;