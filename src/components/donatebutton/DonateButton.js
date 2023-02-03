import React from "react";
import "./DonateButton.css";

export default function Button({ children }) {
  return (
    <button
      onClick={() => {
        alert(
          "Fijn dat je geld wilt doneren, maar ik heb liever een goed cijfer voor mijn opdracht ;)"
        );
      }}
      type="button"
    >
      {children}
    </button>
  );
}
