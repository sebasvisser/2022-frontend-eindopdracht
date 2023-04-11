import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import "./Profile.css";

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
  useEffect(() => {
    getRandomProfile();
  }, []);
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
          {/*Hier een button INLOGGEN toevoegen, en die met OnClick de fetchdata aanroepen. Daarna hieronder die data invullen. */}
          <article>
            <ul>
              <li>
                {personData.name
                  ? personData.name.first + " " + personData.name.last
                  : "Loading..."}
              </li>
              <li>{personData.email ? personData.email : "Loading..."}</li>{" "}
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
