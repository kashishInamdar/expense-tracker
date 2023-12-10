import "./UpdateTransaction"
import axios from "axios"

import { useEffect, useState } from "react"
import Navbar from "../../component/Navbar/Navbar"
import { useParams } from "react-router-dom"

const UpdateTransaction = ()=>{
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("cradit")
    const [description, setDescription] = useState("")
    const [catagory, setCatagory] = useState("")

    const {id} = useParams();

    const GetTransaction = async () =>{
        const respons = await axios.get(`/api/transactions/${id}`)
        const {amount , type , description , catagory} = respons?.data?.data;
        setAmount(amount)
        setType(type)
        setDescription(description)
        setCatagory(catagory)
    }

    useEffect(()=>{
        GetTransaction()
    } , [])

    const updateTransaction = async () => {
        const response = await axios.put(`/api/transactions/${id}`, {
          amount,
          type,
          description,
          catagory
        })
    
        if (response?.data?.data) {
          alert('Transaction updated successfully' );
          window.location.href = '/transactions'
        }
    
        setAmount('')
        setCatagory('')
        setDescription('')
        setType('')
    
      }

    return (
        <>
            <Navbar />
            <form>
                <div className="input-box-container">
                    <h1 className="title">Update Expences</h1>

                    <input type="number" placeholder="Amount" className="input-box"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                    />
                    <input type="text" placeholder="Description" className="input-box"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    />
                    <select
                    className={`select-box ${catagory === ""?"" : "text-black" }`}
                        value={catagory}
                        onChange={(e) => {
                            setCatagory(e.target.value)
                        }}
                    >
                        {/* "food" , "entertainement" , "shopping", "rent" ,"travel" , "education" ,"salary" ,"freelancing" , "side-hussle , "other" */}
                        <option  >Catagory </option>
                        <option value="food" >Food</option>
                        <option value="entertainement">Entertainment</option>
                        <option value="shopping">Shopping</option>
                        <option value="rent">Rent</option>
                        <option value="travel">Travel</option>
                        <option value="education">Education</option>
                        <option value="salary">Salary</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="side-hussle">Side-hussle</option>
                        <option value="other">Other</option>
                    </select>

                    <div className="type-input">
                        Type :
                        <input
                            type="radio"
                            placeholder="Type"
                            value="credit"
                            name="type"
                            checked={type === "credit"}
                            onChange={() => setType("credit")}
                        />
                        Credit
                        <input
                            type="radio"
                            placeholder="Type"
                            value="debit"
                            name="type"
                            checked={type === "debit"}
                            onChange={() => setType("debit")}
                        />
                        Debit
                    </div>
                    <br />

                    <button type="button" className="signup-btn"
                        onClick={updateTransaction}> Update Transaction </button>

                </div>
            </form>
        </>
    )
 
}

export default UpdateTransaction