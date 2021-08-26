import React from "react";
import { render } from "@testing-library/react";
import App from "./app";
import { BackendService } from "../backend";

test("renders learn react link", () => {
  const backend = new BackendService();
  const { getByText } = render(<App backend={backend} />);
  const header = getByText(/Tickets/i);
  expect(header).toBeInTheDocument();
});
