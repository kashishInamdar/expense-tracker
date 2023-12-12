import "./Transactions.css"
import delet from "./delete.png"
import edit from "./pencil.png"
import axios from "axios"
import showToast from 'crunchy-toast';

const deleteUserTransaction = async (id , loadTransaction) => {
    const response = await axios.delete(`/api/transactions/${id}`);

    if (response?.data?.success) {
      showToast(response?.data?.message, 'success', '3000');
      loadTransaction();
    }
  }

const Transactions = ({ amount, type, index, catagory, description , id , loadTransaction }) => {
    return (
        <div className='transaction-box' key={index}>
            <span className={` ${type === "credit" ? "credit" : "debit"}  bold`} >
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
            < hr />
            {description}
            <img src={edit} alt="update" className="edit-btn" />
            <img src={delet} alt="delete" className="delet-btn"
            onClick={()=>{
                deleteUserTransaction(id , loadTransaction)
            }}
            />

        </div>
    )
}


export default Transactions  