
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

import Transaction from './../../component/Transactions/Transactions.js';
import Navbar from '../../component/Navbar/Navbar.js';

function MyTransaction() {

  const [transactions , setTransactions] = useState([])
  const [user , setUser] = useState({})
  const [creditSum , setCreditSum] = useState(0)
  const [debitSum , setDebitSum] = useState(0)


  const loadTransaction = async () =>{
    const getUser = JSON.parse(localStorage.getItem("user") || "{}")
    const storedUser = getUser._id
    let response
    try{
       response = await axios.get(`/api/transactions/users/${storedUser}`)
    }
    catch(err){
      console.log(err);
      alert("Error Loading Trancaction")
    }
    const transactionData = response?.data?.data
    let totalCradit = 0;
    let totalDebit = 0;

    transactionData.forEach((transaction)=>{
      if(transaction.type === "credit"){
        totalCradit += transaction.amount;
      }else{
        totalDebit += transaction.amount;
      }
    })
    setCreditSum(totalCradit)
    setDebitSum(totalDebit)

    setTransactions(transactionData)
      
  }

  useEffect(()=>{
    loadTransaction()
  } , [])

  return (
    
    <div>
      <Navbar />
      {
        transactions?.map(( transaction , index)=>{
          const { amount , type , catagory , description ,createdAt ,_id } = transaction


          return(
            <Transaction 
              index={index}
              amount={amount} 
              type={type} 
              catagory={catagory}  
              description={description}  />
          )
        })
      }
      
    </div>
  )
   
}

export default MyTransaction;
