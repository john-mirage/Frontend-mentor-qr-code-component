import { describe, expect, it } from "vitest";
import { render, screen } from "@utils/test-utils";
import Card from "./component";
import qrCodeImage from "@images/qr-code.png";

describe("Card component", () => {
  it("should display the card qr code image", () => {
    render(<Card />);
    const image = screen.getByAltText(
      /Qr code of the Frontend mentor website/i
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", qrCodeImage);
  });

  it("should display the card title", () => {
    render(<Card />);
    expect(
      screen.getByText(/Improve your front-end skills by building projects/i)
    ).toBeInTheDocument();
  });

  it("should display the card subtitle", () => {
    render(<Card />);
    expect(
      screen.getByText(
        /Scan the QR code to visit Frontend Mentor and take your coding skills to the next level/i
      )
    ).toBeInTheDocument();
  });
});
