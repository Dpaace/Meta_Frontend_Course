import React from "react";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Landing from "./Landing";

test("renders Hero component without errors", () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );

  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("Nepal")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Commodo Lorem culpa amet aute occaecat sunt Lorem reprehenderit est eiusmod tempor laborum dolor. Excepteur aute est velit pariatur tempor eiusmod quis nulla mollit aute. Sit pariatur est velit nisi ullamco ea mollit reprehenderit exercitation excepteur."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Reserve a table")).toBeInTheDocument();
});
