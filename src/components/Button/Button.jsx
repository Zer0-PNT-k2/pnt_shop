import React from "react";

export default function Button({ children, ...rests }) {
  return (<button {...rests}>{children}</button>);
}
