import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Balance from "./Balance";

describe("Balance component", () => {
  beforeAll(() => {
    render(<Balance />);
  });

  test("should have the right message in the dom", () => {
    // const title = screen.getByRole("heading");
    // expect(title).toHaveTextContent("Balance");
  });

  afterAll(cleanup);
});
