import { render, screen } from "@testing-library/react";

import { Header } from "@/components/Header";

describe("Header", () => {
  it("deve renderizar o logo", () => {
    render(<Header />);

    expect(
      screen.getByText("Lacrei Saúde")
    ).toBeInTheDocument();
  });
});