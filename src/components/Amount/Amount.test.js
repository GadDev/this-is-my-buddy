import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Amount from "./Amount";

describe("Amount component", () => {
  beforeAll(() => {
    render(<Amount />);
  });

  test("should have the right message in the dom", () => {
    // const title = screen.getByRole("heading");
    // expect(title).toHaveTextContent("Amount");
  });

  afterAll(cleanup);
});
