import React from "react";
import Footer from "../components/Footer";

function Result() {
  return (
    <>
      <header>
        <h1 id={"resultHeader"}>
          Jouw ideale Weekend Escape zijn we aan het zoeken..
        </h1>
      </header>
      <main>
        <header>
          <span id={"resultSpan"}>Hier komen de resultaten.</span>
        </header>
      </main>
      <Footer />
    </>
  );
}

export default Result;
