import "./Card.css"

const Card = ({ title, info, image }) => {
    return (
        <div className="info-card">
            <img src={image} alt="vector" className="vector-icon"/>
            <p className="name">{title}</p>
            <p className="info">{info} </p>
            

        </div>
    )
}

export default Card