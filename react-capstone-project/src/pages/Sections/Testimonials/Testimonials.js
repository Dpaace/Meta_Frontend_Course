import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";


const testimonials = [
    {
        id: 1,
        author: "Andrea",
        description: "This service was exceptional! The staff was friendly and the quality exceeded my expectations. Highly recommend to anyone looking for a great experience.",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 5,
    },
    {
        id: 2,
        author: "Justin",
        description: "A wonderful experience overall. The staff was attentive and the service was very good. Would definitely come back again.",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4,
    },
    {
        id: 3,
        author: "Hannah",
        description: "Absolutely loved it! Everything from the ambiance to the service was perfect. I will be recommending this to all my friends.",
        image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <div className="testimonial-background">
            <div className="testimonials">
                <div className="testimonials-container">
                    <h1 className="testimonial-title">Testimonials</h1>
                </div>

                <div className="testimonials-list">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            author={testimonial.author}
                            description={testimonial.description}
                            image={testimonial.image}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials