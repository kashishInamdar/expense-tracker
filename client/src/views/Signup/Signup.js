import { useState } from "react"
import "./Signup.css"
import axios from "axios"
import { Link } from "react-router-dom"


const Signup = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [address , setAddress] = useState("")
    const [password , setPassord] = useState("")
    const [number , setNumber] = useState("")

    const signup =  async ()=>{
        if (!name) {
            alert("Name is Requered");
            return;
        }
        if (!email) {
            alert("Email is Requered");
            return;
        }
        if (!number) {
            alert("Mobile is Requered");
            return;
        }
        if (!address) {
            alert("Address is Requered");
            return;
        }
        if (!password) {
            alert("Password is Requered");
            return;
        }

        try{
            const respons = await axios.post("/api/v1/signup" , {
                name : name,
                email : email , 
                address : address,
                password : password,
                mobile : number
            })
           alert(respons?.data?.message)

            if(respons?.data?.success){
                window.location.assign("/login");
            }
        }
        catch(err){
            console.log(err.message)
        }
    }
    

    return (
        <>

            <form>
                <div className="input-box-container">
                    <h1 className="title">Create Account</h1>
                    <input type="text" placeholder="Name" className="input-box"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                     />
                    <input type="text" placeholder="Email" className="input-box"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                    <input type="text" placeholder="Address" className="input-box" 
                    value={address}
                    onChange={(e)=>{
                        setAddress(e.target.value)
                    }}
                    />
                    <input type="text" placeholder="Mobile" className="input-box" 
                    value={number}
                    onChange={(e)=>{
                        setNumber(e.target.value)
                    }}
                    />
                    <input type="password" placeholder="Password" className="input-box" 
                    value={password}
                    onChange={(e)=>{
                        setPassord(e.target.value)
                    }}
                    />

                    <button type="button" className="signup-btn"
                    onClick={signup} > Signup</button>
                    <p>Already have an account?<Link to={"/login"} className="link">Login</Link> </p>
                </div>
            </form>

        </>
    )
}

export default Signup