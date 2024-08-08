import { render } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders learn react link", () => {
  const useState = jest.spyOn(React, "useState");
  render(<App />);
  expect(useState).toHaveBeenCalledWith([]);
  // expect(linkElement).toBeInTheDocument();
});
