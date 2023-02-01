import React from "react";
import Footer from "../components/Footer";

function Search() {
  return (
    <>
      <header>
        <h1>Zoeken, zoeken, zoeken</h1>
        <h3>
          Vinden, vinden, vinden, vinden vinden, vinden, vinden vinden, vinden,
          vinden.
        </h3>
      </header>
      <main>
        <section>
          <form>
            <fieldset>
              <legend>1 Kies het vliegveld vanwaar je vertrekt</legend>
              <label for="airport-input">Vertrek vliegveld</label>
              <select>
                <option value="MST">Maastricht Aachen Airport</option>
                <option value="EIN">Eindhoven Airport</option>
                <option value="NRN">Weeze Airport</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>2 Kies jouw vertrek datum</legend>
              <label for="date-input">Vertrek datum</label>
              <input type="date" name="date-input" id="date-input" />
            </fieldset>
            <fieldset>
              <legend>3 Geef je Budget aan</legend>
              <label for="budget-input">Enter budget:</label>
              <input type="number" name="budget-input" id="budget-input" />
            </fieldset>
            <fieldset>
              <legend>Zoekopdracht Starten</legend>
              <button type="submit">Zoek mijn Weekend Escape</button>
            </fieldset>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Search;
