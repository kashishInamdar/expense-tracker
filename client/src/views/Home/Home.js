
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function Home() {

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
      {
        transactions?.map(( transaction , index)=>{
          const { amount , type , catagory , description ,createdAt ,_id } = transaction


          return(
            <div className='transaction-box'>
              <span className = {` ${ type === "credit" ? "credit" : "debit"}  bold`} > 
                {amount} 
              
              {
                type === "credit" ? "+" : "-" 
              }
              </span>
              <span className='t-catagory'>
                {catagory}
              </span>

             <span className='t-type'>
              {
                 type === "credit" ? "Credited" : "Debited" 
              }
             </span>
             <hr/>
             {description}
             
            </div>
          )
        })
      }
      
    </div>
  )
   
}

export default Home;
