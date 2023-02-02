import React, { useState } from "react";
import Footer from "../components/footer/Footer";
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
          Als je nou ingelogd was, dan zouden hieronder jouw gegevens staan.
        </h3>
      </header>
      <main>
        <section>
          <article>
            <ul>
              <li>Voornaam + Achternaam</li>
              <li>Email adres</li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
