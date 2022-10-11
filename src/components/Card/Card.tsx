import { FunctionComponent } from "react";
import qrCodeImage from "@images/qr-code.png";

const Card: FunctionComponent = () => {
  return (
    <div className="shadow-2xl w-full max-w-320 overflow-hidden rounded-20 bg-white px-16 pt-16 pb-40 text-center shadow-dark-blue/20">
      <a
        className="aspect-w-1 aspect-h-1 mb-24 block overflow-hidden rounded-10 bg-blue shadow-card transition-shadow duration-100 hover-device:hover:shadow-card-hover"
        href="https://www.frontendmentor.io"
        aria-label="Go to the Frontend mentor website"
      >
        <img
          className="w-full object-cover object-center"
          src={qrCodeImage}
          alt="Qr code of the Frontend mentor website"
          draggable="false"
        />
      </a>
      <h2 className="mb-16 text-22 text-dark-blue">
        Improve your front-end skills by building projects
      </h2>
      <p className="px-8 text-15 text-grayish-blue">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default Card;
