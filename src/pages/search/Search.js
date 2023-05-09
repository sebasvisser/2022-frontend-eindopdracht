import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
// import { redirect } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Search.css";

/* Binnen het formulier gebruik gemaakt van veld id's zoals ze ook binnen de Amadeus API gebruikt worden. Dus vertrekvliegvelden volgens de IATA-lijst. En de overige parameters ook zoals de api het voorschrijft.  */

function Search() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const paragraph = document.querySelector(".output");
    const requestOrigin = data.origin;
    const requestDate = data.departureDate;
    const requestBudget = data.maxPrice;
    // onderstaande URL is voor Amadeus API
    //nonStop boolean(query) if this parameter is set to true, only flights going from the origin to the destination with no stop in-between are considered
    const requestURL2 = `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${requestOrigin}&departureDate=${requestDate}&oneWay=false&nonStop=true&maxPrice=${requestBudget}&viewBy=DESTINATION`;
    // hieronder opgedeelde requestURL
    const requestURL = await axios.get(
      "https://test.api.amadeus.com/v1/shopping/flight-destinations",
      {
        params: {
          origin: requestOrigin,
          departureDate: requestDate,
          oneWay: "false",
          nonStop: "true",
          maxPrice: requestBudget,
          viewBy: "DESTINATION",
        },
        headers: {
          Authorization: "Bearer CpjU0sEenniHCgPDrndzOSWFk5mN",
        },
      }
    );

    paragraph.textContent = requestURL2;

    // TODO requestURL in Context opslaan

    // TODO doorsturen naar resultatenpagina
    //redirect("./result");
  };
  console.log(errors);

  return (
    <div className="searchPage">
      <header>
        <h1>Zoeken, zoeken, zoeken</h1>
        <h3>
          Vinden, vinden, vinden, vinden vinden, vinden, vinden vinden, vinden,
          vinden.
        </h3>
        <p>request URL om even unused error te voorkomen{requestURL}</p>
      </header>
      <main>
        <section className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>1 Kies het vliegveld vanwaar je vertrekt</label>
            <select {...register("origin")}>
              <option value="AMS">Amsterdam Airport</option>
              <option value="DUS">Dusseldorf Airport</option>
              <option value="NRN">Weeze Airport</option>
              <option value="CGN">Keulen Airport</option>
            </select>
            <label>2 Kies jouw vertrek datum</label>
            <input
              type="date"
              placeholder="2 Kies jouw vertrek datum"
              {...register("departureDate", {})}
            />
            <label>3 Geef je Budget aan</label>
            <input
              type="number"
              placeholder="3 Geef je Budget aan"
              {...register("maxPrice", { min: 0, max: 5000 })}
            />

            <input type="submit" />
          </form>
        </section>
        <section>
          <h2>Zoekparameters voor de API:</h2>
          <p className="output">..</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
