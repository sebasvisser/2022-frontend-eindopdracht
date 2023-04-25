import React from "react";
import Footer from "../../components/Footer/Footer";
import DonateButton from "../../components/Donatebutton/DonateButton";
import "./Donations.css";

function Donations() {
  return (
    <div className="donationsPage">
      <header>
        <h1>Doneer nu het nog kan!</h1>
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
        </section>
        <section>
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
            <DonateButton>Doneer</DonateButton>
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
            <DonateButton fantastisch={true}>Doneer Super</DonateButton>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Donations;
