import React from "react";

export default function Input({ className, placeholder, ...rest }) {
  return (
    <input
      className={[
        className,
        "block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
      ].join(" ")}
      placeholder={placeholder}
      {...rest}
    />
  );
}
