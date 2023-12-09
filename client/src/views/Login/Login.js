import { useEffect, useState } from 'react'
import './../Signup/Signup.css'
import {Link} from "react-router-dom"
import axios from 'axios'

const Login = ()=>{

    const [email , setEmail] = useState("")
    const [password , setPassord] = useState("")

    
        const login = async ()=>{
            const user = {
                email,
                password,
            }
            try{
    
            const respons = await axios.post("/api/v1/login" , user)
            console.log(respons)
            alert(respons?.data?.massage)
    
            if(respons?.data?.success){
                localStorage.setItem('user' , JSON.stringify(respons?.data?.data));
                window.location.assign("/")
            }
        }
        catch(err){
            console.log(err.massage)
        }
    
        }

        useEffect(()=>{
            const StoredUser = JSON.parse(localStorage.getItem("user") || "{}")

            if(StoredUser?.email){
                alert("You are alredy logged in!")
                window.location.assign("/")
            }
        } , [])
   



    return(
        <>
        <form>
        <div className="input-box-container">
                    <h1 className="title">Login</h1>

                    <input type="text" placeholder="Email" className="input-box"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                    <input type="password" placeholder="Password" className="input-box" 
                    value={password}
                    onChange={(e)=>{
                        setPassord(e.target.value)
                    }}
                    />
                    <br />

                    <button type="button" className="signup-btn"
                    onClick={login} > Login </button>
                    <br />
                    <br />
                    <p className='link-position'>Crate an account?<Link to={"/signup"} className="link">Signup</Link> </p>
                </div>
        </form>
        </>
    )

}

export default Login