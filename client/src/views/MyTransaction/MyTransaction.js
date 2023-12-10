
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

import Transaction from '../../component/Transactions/Transactions.js';
import Navbar from '../../component/Navbar/Navbar.js';

function MyTransaction() {

  const [transactions , setTransactions] = useState([])

  const loadBuses = async () =>{
    try{
      const response = await axios.get("/api/transactions")
      setTransactions(response?.data?.data)
    }
    catch(err){
      console.log(err);
      alert("Error Loading Trancaction")
    }
  }

  useEffect(()=>{
    loadBuses()
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
