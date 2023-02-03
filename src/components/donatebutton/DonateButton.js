import React from "react";
import "./DonateButton.css";

export default function Button({ fantastisch, children }) {
  if (fantastisch) {
    return (
      <button
        id="donate-btn"
        onClick={() => {
          alert(
            "Super fijn dat je super geld wilt doneren, maar ik heb liever een Super goed cijfer voor mijn opdracht ;)"
          );
        }}
        type="button"
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        id="donate-btn"
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
}
