import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <header>
        <h1>Deze pagina bestaat (nog) niet...</h1>
      </header>
      <main>
        <header>
          <p>
            Ergens een typefoutje gemaakt? Is niet erg, kan gebeuren.. <br />
            Klik <Link to="/">hier</Link> om weer terug naar de{" "}
            <Link to="/">homepagina</Link> te gaan.
          </p>
        </header>
      </main>
    </>
  );
}

export default NotFound;
