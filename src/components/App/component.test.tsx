import { describe, expect, it } from "vitest";
import App from "./component";
import { render, screen } from "@utils/test-utils";

describe("App component", () => {
  it("should display the app title", () => {
    render(<App />);
    expect(screen.getByText(/Qr code component/i)).toBeInTheDocument();
  });
});
