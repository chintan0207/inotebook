import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in successfully", "success")
            navigate("/")

        }
        else {
            props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }

    return (
        <div className=''>
            <h2>Login to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} name='password' onChange={onChange} />
                </div>
                
                <button type="submit" className="btn btn-primary mb-3 " >Login</button>
                <button type="submit"  onClick={()=>{navigate("/signup")}} className="btn btn-primary mx-2 mb-3" >Signup</button>


            </form>
        </div>
    )
}

export default Login