import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Transaction from "./Transaction";

const transactionProps = {
  date: "2018-06-30",
  description: "description",
  category_title: "category_title",
  amount: { value: 12, currency_iso: "EUR" },
};
describe("Transaction component", () => {
  beforeAll(() => {
    render(<Transaction data={transactionProps} />);
  });

  test("should have the right h5 in the dom", () => {
    const title = screen.getByRole("heading", { level: 5 });
    expect(title).toHaveTextContent("description");
  });

  afterAll(cleanup);
});
