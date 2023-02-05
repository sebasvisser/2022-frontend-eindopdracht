import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import "./Search.css";

{
  /* Binnen het formulier gebruik gemaakt van veld id's zoals ze ook binnen de Amadeus API gebruikt worden. Dus vertrekvliegvelden volgens de IATA-lijst. En de overige parameters ook zoals de api het voorschrijft. */
}
function Search() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const paragraph = document.querySelector(".output");
    const requestOrigin = data.origin;
    const requestDate = data.departureDate;
    const requestBudget = data.maxPrice;
    const requestURL = `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${requestOrigin}&departureDate=${requestDate}&oneWay=false&nonStop=false&maxPrice=${requestBudget}&viewBy=DESTINATION`;

    paragraph.textContent = requestURL;
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
      </header>
      <main>
        <section className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>1 Kies het vliegveld vanwaar je vertrekt</label>
            <select {...register("origin")}>
              <option value="MST">Maastricht Aachen Airport</option>
              <option value="EIN"> Eindhoven Airport</option>
              <option value="NRN">Weeze Airport</option>
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
