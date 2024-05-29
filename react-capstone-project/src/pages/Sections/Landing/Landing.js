import React from "react";
import './Landing.css'
import Image from "../../../assets/restaurantchef.jpg";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Landing = () => {
    const navigate = useNavigate();
    const onClickReserve = () => {
        navigate(pages.get("reservations").path);
      }
    return (
        <div className="landing-background">
            <div className="landing">
                <div>
                    <h1 className="title">Little Lemon</h1>
                    <h2 className="subtitle">Nepal</h2>
                    <p>
                        Commodo Lorem culpa amet aute occaecat sunt Lorem reprehenderit est eiusmod tempor laborum dolor. Excepteur aute est velit pariatur tempor eiusmod quis nulla mollit aute. Sit pariatur est velit nisi ullamco ea mollit reprehenderit exercitation excepteur.
                    </p>
                    <Button title={"Reserve a table"} onClick={onClickReserve} />
                </div>
                <img
                    className="image"
                    src={Image}
                    alt="Food Pic"
                    height={200}
                    width={200}
                />
            </div>
        </div>
    )
}

export default Landing