import React, { useEffect, useRef } from "react";

export default function Steps() {
  const nextRef = useRef(null);

  useEffect(() => {
    if (nextRef.current) {
      nextRef.current.classList.add("step-primary");
    }
  }, []);

  return (
    <>
      <ul className="steps steps-vertical text-lg">
        <li className="step step-primary">Register</li>
        <li className="step">Choose plan</li>
        <li className="step">Purchase</li>
        <li ref={nextRef} className="step">
          Receive Product
        </li>
      </ul>
    </>
  );
}
