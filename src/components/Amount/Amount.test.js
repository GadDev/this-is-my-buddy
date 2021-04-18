import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Amount from "./Amount";

const amountProps = {
  value: 10,
  currency_iso: "EUR",
};
describe("Amount component", () => {
  beforeAll(() => {
    render(<Amount amount={amountProps} />);
  });

  test("should have the right message in the dom", () => {
    // const title = screen.getByRole("heading");
    // expect(title).toHaveTextContent("Amount");
  });

  afterAll(cleanup);
});
