import React from "react";
import hero from "../assets/hero-image-weekend-escapes.jpg";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <header>
        <h1>Omdat je gewoon even lekker weg wilt!</h1>
        <h3>In 3 stappen jouw volgende weekend trip vinden</h3>
      </header>
      <main>
        <section>
          <img alt="Weekend Escapes Hero Image" src={hero} />
        </section>
        <section>
          <header>
            <h2>In 3 stappen jouw volgende weekend trip vinden</h2>
          </header>
          <article>
            <h3>1 Kies je vertrek vliegveld</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consequatur in ipsum magnam quia quisquam temporibus voluptatum.
              Explicabo praesentium, voluptatibus?
            </p>
          </article>
          <article>
            <h3>2 Kies je vertrek datum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consequatur in ipsum magnam quia quisquam temporibus voluptatum.
              Explicabo praesentium, voluptatibus?
            </p>
          </article>
          <article>
            <h3>3 Kies je budget</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consequatur in ipsum magnam quia quisquam temporibus voluptatum.
              Explicabo praesentium, voluptatibus?
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
