import React from "react";
import "./FoodCard.css";
import delivery from "../../assets/delivery.svg";

const FoodCard = ({ title, description, image, price }) => {
    return (
        <div className="food-card">
            <div className="card-image">
                <img src={image} alt="food" height={200} />
            </div>
            <div className="card-body">
                <div className="card-header">
                    <div className="header-title">
                        <p className="card-title">{title}</p>
                        <p className="card-price">{price}</p>
                    </div>
                    <p className="card-description">{description}</p>
                </div>

                <div className="card-delivery">
                    <p className="delivery-title">Order a delivery</p>
                    <img src={delivery} alt="uber eats"></img>
                </div>
            </div>
        </div>
    )
}

export default FoodCard