import "./Signup.css"
const Signup = () => {
    return (
        <>

            <form>
                <div className="input-box-container">
                    <h1 className="title">Signup</h1>
                    <input type="text" placeholder="Name" className="input-box" />
                    <input type="text" placeholder="Email" className="input-box" />
                    <input type="text" placeholder="Address" className="input-box" />
                    <input type="text" placeholder="Nomber" className="input-box" />
                    <input type="password" placeholder="Password" className="input-box" />
                </div>
            </form>

        </>
    )
}

export default Signup