import React from "react";

export default function Input({ type, id, placeholder, ...rests }) {
  return <input type={type} id={id} placeholder={placeholder} {...rests} />;
}
