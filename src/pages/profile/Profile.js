import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import SignupForm from "../../components/Signup/Signup";
import LoginForm from "../../components/Login/Login";
import { useAuth } from "../../context/AuthContext.js";
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
  // token uit de context halen:
  const { token } = useAuth();

  return (
    <>
      <header>
        <h1>Fijn dat je er bent!</h1>
        <button onClick={makeGetRequest}>
          Klik hier om de api te checken{" "}
        </button>
        <p>Response: {apiData} </p>
        <h3>Hier staat leuke nep-data vanuit de Random API.</h3>
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
        <section>
          {!token && (
            <article>
              <h2>Registreren kan hier</h2>
              <SignupForm />
            </article>
          )}
          {!token && (
            <article>
              <h2>Inloggen kan hier:</h2>
              <LoginForm />
            </article>
          )}
          {token && (
            <article>
              <h2>Welkom, je bent ingelogd!</h2>
              {/* Leuk om hier de naam van de ingelogd toe te voegen. */}
            </article>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
