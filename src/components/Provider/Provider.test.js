import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Provider from "./Provider";

describe("App component", () => {
  beforeAll(() => {
    render(<Provider />);
  });

  test("should have the right message in the dom", () => {
    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent("Provider");
  });

  afterAll(cleanup);
});
