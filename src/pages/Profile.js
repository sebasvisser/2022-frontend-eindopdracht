import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";

function Profile() {
  // Stukje state om alle info over profiel in op te slaan
  const [personData, setPersonData] = useState({});
  // Data van API binnenhalen zodat Profiel van Random iemand getoond kan worden indien niet ingelogd.
  async function getRandomProfile() {
    try {
      const result = await axios.get(`https://randomuser.me/api/`);
      setPersonData(result.data.results[0]);
      console.log(personData);
    } catch (e) {
      console.error(e);
    }
  }
  // getRandomProfile();

  return (
    <>
      <header>
        <h1>Fijn dat je er bent!</h1>
        <h3>
          Alle coole mensen doen het, nu heb jij ook de kans om eindelijk er
          eens echt voor te gaan.
        </h3>
      </header>
      <main>
        <section>
          <header>
            <h2>Wees een held, doneer geld.</h2>
          </header>
          <article>
            <h3>Coole Mensen Club</h3>
            <p>
              Voeg je toe aan het clubje mensen die gewoon cool zijn en doneren.
            </p>
            <ul>
              <li>Zoekopdrachten Opslaan</li>
              <li>Prijswaarschuwingen</li>
              <li>Buitenkansjes per Mail</li>
              <li>Warm gevoel omdat je iets goeds voor de wereld doet</li>
            </ul>
            <button>Doneer</button>
          </article>
          <article>
            <h3>Super Coole Mensen Club</h3>
            <p>
              Voeg je toe aan het super clubje mensen die gewoon super cool zijn
              en doneren.
            </p>
            <ul>
              <li>Super Zoekopdrachten Opslaan</li>
              <li>Super Prijswaarschuwingen</li>
              <li>Super Buitenkansjes per Mail</li>
              <li>Super Warm gevoel omdat je iets goeds voor de wereld doet</li>
            </ul>
            <button>Doneer Super</button>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
