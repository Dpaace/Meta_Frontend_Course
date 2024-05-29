import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";
import FoodCard from "../../../components/FoodCard/FoodCard";

const specials = [
    {
        id: 1,
        title: "Sushi",
        description: "A delightful selection of fresh sushi rolls with a variety of fillings, served with soy sauce and wasabi.",
        image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: "Rs 11.99"
    },
    {
        id: 2,
        title: "Pizza",
        description: "A classic Italian pizza with a crispy crust, topped with rich tomato sauce, mozzarella cheese, and your choice of fresh toppings.",
        image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: "Rs 11.99"
    },
    {
        id: 3,
        title: "Dumplings",
        description: "Delicious steamed or fried dumplings filled with a savory mixture of meat and vegetables, served with dipping sauce.",
        image: "https://images.pexels.com/photos/960856/pexels-photo-960856.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: "Rs 11.99"
    }
];

const Specials = () => {
    const navigate = useNavigate();

    const onClickMenu = () => {
        navigate(pages.get("orders").path);
    };
    return (
        <div className="specials-background">
            <div className="specials">
                <div className="specials-container">
                    <h1 className="specials-title">Specials</h1>
                    <Button title={"Online Menu"} onClick={onClickMenu} />
                </div>

                <div className="specials-list">
                    {
                        specials.map((special) => (
                            <FoodCard
                                key={special.id}
                                title={special.title}
                                description={special.description}
                                image={special.image}
                                price={special.price}
                            />
                        ))
                    }
                </div>
            </div>
         </div>

    )
}

export default Specials