import { render, screen } from "@testing-library/react";

import {
  AccessibilityMenu,
} from "@/components/AccessibilityMenu";

describe(
  "AccessibilityMenu",
  () => {
    it(
      "deve renderizar controles",
      () => {
        render(
          <AccessibilityMenu />
        );

        expect(
          screen.getByLabelText(
            "Aumentar fonte"
          )
        ).toBeInTheDocument();
      }
    );
  }
);