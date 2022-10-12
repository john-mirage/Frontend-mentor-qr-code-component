import { FunctionComponent, useEffect, useRef, useState } from "react";
import qrCodeImage from "@images/qr-code.png";
import { clsx } from "clsx";

const Card: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    if (imageRef.current.complete) return;
    let current = true;
    imageRef.current.addEventListener("load", () => {
      if (!imageRef.current || !current) return;
      setTimeout(() => {
        setVisible(true);
      }, 0);
    });
    return () => {
      current = false;
    };
  }, []);

  return (
    <article className="w-full max-w-320 overflow-hidden rounded-20 bg-white px-16 pt-16 pb-40 text-center shadow-2xl shadow-dark-blue/20 print:rounded-0 print:bg-transparent print:shadow-none">
      <a
        className="group aspect-w-1 aspect-h-1 mb-24 block overflow-hidden rounded-10 bg-blue outline-none focus-visible:ring-8 focus-visible:ring-blue/30 motion-safe:transition-shadow print:rounded-0"
        href="https://www.frontendmentor.io"
        target="_blank"
        aria-label="Go to the Frontend mentor website"
      >
        <img
          ref={imageRef}
          className={clsx(
            "object-cover object-center motion-safe:transition-transform-and-opacity hover-device:group-hover:scale-110",
            { "opacity-0": !visible }
          )}
          src={qrCodeImage}
          alt="Qr code of the Frontend mentor website"
          draggable="false"
        />
      </a>
      <h2 className="mb-16 text-heading text-dark-blue print:text-black">
        Improve your front-end skills by building projects
      </h2>
      <p className="px-8 text-body text-grayish-blue contrast-more:text-dark-blue print:text-black">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </article>
  );
};

export default Card;
