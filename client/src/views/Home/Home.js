import "./Home.css"
import Navbar from "../../component/Navbar/Navbar"

import vactor from "./Money.png"
import trackIncom from "./Finance-amico.png"
import allTransaction from "./Finance-pana.png"
import addTran from "./income.png"
import Opration from "./Finance-cuate.png"

import Card from "../../component/Card/Card"

const Home = () => {
    return (
        <div className="home-page">
            <Navbar /> 
           
            <div className="container">
                <div className="emty-container"></div>
                <div className="main-div">

                    <div className="containt-div">
                        <h1 className="title-1">Expence Tracker</h1>
                        <p className="paregraph">Use an expense tracker with smart features to help you manage your money:</p>
                        <button className="transaction-btn">Add Transaction</button>
                    </div>
                    <div className="card-container">
                        <h2 className="title-2">About Project</h2>
                        <div className="cards">
                            <Card title={"Track Incom"} image={trackIncom} info={`Get information from the user  useing Add Transaction Page`} />

                            <Card title={"Add Transaction"} image={addTran} info={`We can add the amount, type(ex. food , education) , Category (Credit / Debit) and Description`} />                           
                            <Card title={"Perform Opration"} image={Opration} info={`Perform Opration on transaction Like Create update or Delete the  texpence information`} />                           
                            <Card title={"All Expensenc"} image={allTransaction} info={`See all expences on traker Information on Transaction page`} />                           
                        </div>

                    </div>

                </div>
            </div>
            <img src={vactor} alt="vactor" className="vactor" />
        </div>
    )
}

export default Home