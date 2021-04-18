import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Balance from "./Balance";

const balanceProps = { amount: 10, currency_iso: "EUR" };
describe("Balance component", () => {
  beforeAll(() => {
    render(<Balance balance={balanceProps} />);
  });

  test("should have the right message in the dom", () => {
    // const title = screen.getByRole("heading");
    // expect(title).toHaveTextContent("Balance");
  });

  afterAll(cleanup);
});
