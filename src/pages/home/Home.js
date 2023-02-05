import React from "react";
import hero from "../../assets/hero-image-weekend-escapes.jpg";
import Footer from "../../components/footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <header>
        <h1>Omdat je gewoon even lekker weg wilt!</h1>
        <h3>In 3 stappen jouw volgende weekend trip vinden</h3>
      </header>
      <main>
        <section>
          <img alt="Weekend Escapes Hero" src={hero} />
        </section>
        <section>
          <header>
            <h2>In 3 stappen jouw volgende weekend trip vinden</h2>
          </header>
          <article>
            <h3>1 Kies je vertrek vliegveld</h3>
            <p>
              In de eerste stap van het boeken van een vliegticket is het
              belangrijk om te bepalen vanaf welk vliegveld je wilt vertrekken.
              Dit is niet alleen afhankelijk van waar je woont, maar ook van
              eventuele reistijden naar het vliegveld, beschikbare vluchten en
              eventuele overstappen. Door de juiste keuze te maken voor je
              vertrekvliegveld, kun je ervoor zorgen dat je reis soepel verloopt
              en dat je op tijd op je bestemming aankomt. Het is daarom
              belangrijk om goed onderzoek te doen naar alle beschikbare opties
              en te overwegen welk vliegveld het beste bij jouw reisbehoeften
              past.
            </p>
          </article>
          <article>
            <h3>2 Kies je vertrek datum</h3>
            <p>
              In de tweede stap van het boeken van een vliegticket is het tijd
              om de vertrekdatum te bepalen. Dit is een belangrijke beslissing,
              aangezien de prijs van een vliegticket vaak sterk afhankelijk is
              van wanneer je reist. Het is daarom aan te raden om verschillende
              data te overwegen en te vergelijken, zodat je de best mogelijke
              deal kunt vinden. Bovendien is het ook belangrijk om rekening te
              houden met eventuele beperkingen, zoals de beschikbaarheid van
              vluchten en de mogelijke impact van het weer. Door een gedegen
              onderzoek uit te voeren en de juiste vertrekdatum te kiezen, kun
              je ervoor zorgen dat je reis comfortabel en betaalbaar verloopt.
            </p>
          </article>
          <article>
            <h3>3 Kies je budget</h3>
            <p>
              In de derde stap van het boeken van een vliegticket is het
              belangrijk om een budget vast te stellen. Dit zal je helpen
              bepalen welke opties realistisch zijn en welke reisbestemmingen
              binnen jouw financiële middelen vallen. Het is aan te raden om
              rekening te houden met de kosten van het vliegticket, maar ook met
              andere kosten die verbonden zijn aan de reis, zoals vervoer naar
              het vliegveld, overnachtingen en uitgaven ter plaatse. Door een
              realistisch budget vast te stellen, kun je ervoor zorgen dat je
              niet voor vervelende verrassingen komt te staan en dat je op een
              verantwoorde manier kunt reizen. Het is daarom belangrijk om goed
              te overwegen hoeveel je kunt besteden aan je reis en hoe je dit
              budget het beste kunt inzetten.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
