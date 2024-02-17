import React from "react";

export default function Wrapper({ children, ...rests }) {
  return (
    <div className="mx-auto max-w-screen-xl" {...rests}>
      {children}
    </div>
  );
}
