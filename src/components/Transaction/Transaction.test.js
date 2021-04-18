import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Transaction from "./Transaction";

describe("Transaction component", () => {
  beforeAll(() => {
    render(<Transaction />);
  });

  test("should have the right message in the dom", () => {
    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent("Transaction");
  });

  afterAll(cleanup);
});
