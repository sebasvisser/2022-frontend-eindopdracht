import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import SignupForm from "../../components/login/Login";
import axios from "axios";
import "./Profile.css";

function Profile() {
  // stukje state om de backend dingen op te slaan
  const [apiData, setApiData] = useState("");
  // backend aanspreken om te testen of die wakker is ;)
  async function makeGetRequest() {
    try {
      const apiCheck = await axios.get(
        "https://frontend-educational-backend.herokuapp.com/api/test/all"
      );
      console.log(apiCheck);
      setApiData(apiCheck.data);
      console.log(apiData); // hier komt nog een lege string uit omdat state niet snel genoeg geupdate is voordat deze regel uitgevoerd wordt.
      console.log(apiCheck.data); // Hier zie je wat er had moeten staan.
    } catch (e) {
      console.error(e);
    }
  }
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
        <button onClick={makeGetRequest}>
          Klik hier om de api te checken{" "}
        </button>
        <p>Response: {apiData} </p>
        <h3>
          Als je nou ingelogd was, dan zouden hieronder jouw gegevens staan.
        </h3>
        {/* Deze functie moet nog gemaakt worden, inloggen en ophalen data via novi backend
        <button onClick={logIn}>Klik hier om in te loggen</button>*/}
      </header>
      <main>
        <section>
          <article>
            <ul>
              <li>
                {personData.name
                  ? personData.name.first + " " + personData.name.last
                  : "Loading..."}
              </li>
              <li>{personData.email ? personData.email : "Loading..."}</li>{" "}
            </ul>
            <button onClick={getRandomProfile}>
              Klik hier om andere profiel-data op te halen
            </button>
          </article>
        </section>
        <article>
          {/*hier een inlogformulier verbonden met de Novi Backend*/}
          <SignupForm />
        </article>
        {/*Hier een button INLOGGEN toevoegen, en die met OnClick de fetchdata aanroepen. Daarna hieronder die data invullen. */}
        <section></section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
