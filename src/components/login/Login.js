import React from 'react'
import './login.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [ans, setans] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        if(ans == "Welcome") {
            navigate('/reseller');
        }
    }, [ans])

    const login = () => {
        Axios.post('http://localhost:3001/login', ({ username: username, password: password })).then((Response) => {
        console.log(1)    
        setans(Response.data)
        if(Response.data!='Welcome'){
            alert(Response.data);}
        })
    }

    const useRedirect = () => {
        
    }

    return (
        <>
            <div className="login">
                <div className="form_login">
                    <div className="logo_admin">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                        <p>ssdsdsd</p>
                    </div>

                    <div className="login_detiles">
                        <h4>ADMIN LOGIN</h4>
                        <label htmlFor="email">Registered Email *</label>
                        <div className="email">
                            <input type="email" name="email" id="email" required
                                onChange={(e) => {
                                    setusername(e.target.value);
                                }} />
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>

                        </div>
                        <label htmlFor="password">Password *</label>
                        <div className="password">
                            <input type="password" name="password" id="password" required
                                onChange={(e) => {
                                    setpassword(e.target.value);
                                }}
                            />
                            <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </div>
                        <div className="submit" onClick={login}>

                            <Link>Log in</Link>
                            <p>Forget Password ?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login