import "./AddTransaction.css"
import "./../Signup/Signup.css"
import { useState } from "react"
import axios from "axios"

const AddTransaction = () => {
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("cradit")
    const [description, setDescription] = useState("")
    const [catagory, setCatagory] = useState("")

    const addTransaction = async () => {
        const userStorage = JSON.parse(localStorage.getItem('user'));

        try {
            const response = await axios.post("/api/transaction", {
                user: userStorage?._id,
                amount: amount,
                type: type,
                description: description,
                catagory: catagory
            })

            alert(response?.data?.massage)
            if (response?.data?.success) {
                window.location.href = "/"
            }
        }
        catch (err) {
            alert(err.massage)
        }


    }


    return (
        <>
            <form>
                <div className="input-box-container">
                    <h1 className="title">Add Expences</h1>

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
                        onClick={addTransaction}> Add Transaction </button>

                </div>
            </form>
        </>
    )
}

export default AddTransaction