import { render, screen } from "@testing-library/react";

import { Button } from "@/components/Button";

describe("Button", () => {
  it("deve renderizar texto", () => {
    render(
      <Button>
        Clique aqui
      </Button>
    );

    expect(
      screen.getByText("Clique aqui")
    ).toBeInTheDocument();
  });
});