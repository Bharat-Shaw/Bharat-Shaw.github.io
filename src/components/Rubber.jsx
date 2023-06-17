import React from "react";

export default function Rubber({ text }) {
  return (
    <span>
      {text.split("").map((letter, index) => (
        <span key={index} className="rubber">
          {letter}
        </span>
      ))}
    </span>
  );
}
