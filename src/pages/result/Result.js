import React from "react";
import Footer from "../../components/footer/Footer";
import "./Result.css";

function Result() {
  // zoekopdracht om api mee te testen
  const requestURL = `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=AMS&departureDate=2023-02-23&oneWay=false&nonStop=false&maxPrice=500&viewBy=DESTINATION`;

  return (
    <>
      <header>
        <h1 id={"resultHeader"}>
          Jouw ideale Weekend Escape zijn we aan het zoeken..
        </h1>
      </header>
      <main>
        <header>
          <ul id={"resultList"}>Hier komen de resultaten.</ul>
        </header>
      </main>
      <Footer />
    </>
  );
}

export default Result;
