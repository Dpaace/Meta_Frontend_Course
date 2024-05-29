import React from "react";
import { render, screen } from "@testing-library/react";
import FoodCard from "./FoodCard";
import delivery from "../../assets/delivery.svg";

describe("FoodCard component", () => {
  // Sample data for FoodCard props
  const sampleData = {
    title: "Sushi",
    description: "A delightful selection of fresh sushi rolls with a variety of fillings, served with soy sauce and wasabi.",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Rs 11.99"
};

  test("renders the FoodCard component with given data", () => {
    render(<FoodCard {...sampleData} />);

    // Check if the image is rendered with correct src and alt
    const imageElement = screen.getByAltText("food");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", sampleData.image);
    expect(imageElement).toHaveAttribute("height", "200");

    // Check if the title is rendered
    const titleElement = screen.getByText(sampleData.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(sampleData.description);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the price is rendered
    const priceElement = screen.getByText(sampleData.price);
    expect(priceElement).toBeInTheDocument();

    // Check if the delivery information is rendered
    const deliveryTitleElement = screen.getByText("Order a delivery");
    expect(deliveryTitleElement).toBeInTheDocument();

    const deliveryImageElement = screen.getByAltText("uber eats");
    expect(deliveryImageElement).toBeInTheDocument();
    expect(deliveryImageElement).toHaveAttribute("src", delivery);
  });
});
