import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Provider from "./Provider";

const providerProps = {
  title: "title",
  account_number: "1234567",
  sort_code: "1234567",
  description: "description",
};
describe("Provider component", () => {
  beforeAll(() => {
    render(<Provider provider={providerProps} />);
  });

  test("should have the right message in the dom", () => {
    // const title = screen.getByRole("heading");
    // expect(title).toHaveTextContent("Provider");
  });

  afterAll(cleanup);
});
