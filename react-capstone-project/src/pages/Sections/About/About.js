import React from "react";
import "./About.css";
import Image from "../../../assets/restauranfood.jpg";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
    return (
        <div className="bg-white">
            <div className="about">
                <div>
                    <h1 className="about-title">Little Lemon</h1>
                    <h2 className="about-subtitle">Nepal</h2>
                    <p className="about-description">
                        Welcome to Little Lemon, a charming and vibrant restaurant located in the heart of Nepal.
                        We pride ourselves on offering a delightful culinary experience, combining traditional Nepalese flavors with a modern twist.
                        Our menu is crafted from the freshest ingredients, ensuring that each dish is bursting with flavor and authenticity.
                        Whether you're here for a casual meal or a special occasion, Little Lemon promises a warm atmosphere and exceptional service.
                        Come and savor the taste of Nepal at Little Lemon!
                    </p>
                </div>

                <img
                    className="about-image-1"
                    src={ImageRestaurant}
                    alt="Restaurant food"
                    height={200}
                    width={200}
                />
                <img
                    className="about-image-2"
                    src={Image}
                    alt="Restaurant food"
                    height={200}
                    width={200}
                />
            </div>
        </div>
    );
};



export default About