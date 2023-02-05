import React from "react";
import Footer from "../../components/footer/Footer";
import "./Result.css";
//import Amadeus from "amadeus";
import axios from "axios";

function Result() {
  // zoekopdracht om api mee te testen
  const requestURL = `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=AMS&departureDate=2023-02-23&oneWay=false&nonStop=false&maxPrice=500&viewBy=DESTINATION`;
  function findEscape() {
    const getToken = async () => {
      try {
        const res = await axios.post(
          "https://test.api.amadeus.com/v1/security/oauth2/token",
          {
            client_id: "lfrMmgzyxkKQWAejnB3TTwWTysnlchr2",
            client_secret: "rz1PfA4uHlYL433d",
            grant_type: "client_credentials",
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(res);
        return res.data.access_token;
      } catch (error) {
        console.log(error);
      }
    };
    const pandaToken = getToken();

    const getFlights = async () => {
      try {
        const response = await axios.get(
          "https://test.api.amadeus.com/v1/shopping/flight-destinations",
          {
            params: {
              origin: "AMS",
              maxPrice: "2000",
            },
            headers: {
              Authorization: `Bearer {{${pandaToken}}}`,
            },
          }
        );
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getFlights();
  }

  return (
    <>
      <header>
        <h1 id={"resultHeader"}>
          Jouw ideale Weekend Escape zijn we aan het zoeken..
        </h1>
      </header>
      <main>
        <header>
          <button onClick={findEscape}>Find Weekend Escape</button>
          <ul id={"resultList"}>Hier komen de resultaten.</ul>
        </header>
      </main>
      <Footer />
    </>
  );
}

export default Result;
