import "./Transactions.css"

const Transactions = ({ amount, type, index, catagory, description }) => {
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

        </div>
    )
}


export default Transactions  