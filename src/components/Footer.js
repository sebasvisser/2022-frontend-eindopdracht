import React from "react";

function Footer() {
  function getRandomNumberBetween0And5() {
    return Math.floor(Math.random() * 6);
  }
  const footerId = getRandomNumberBetween0And5();
  switch (footerId) {
    case 1:
      return (
        <footer>
          <h3>Slimpie:</h3>
          <p>
            "Hier bij Weekend Escapes hopen we dat u de perfecte vakantie voor
            uzelf heeft kunnen vinden! Neem de tijd om alles goed te vergelijken
            en plan de beste vakantie ooit!"
          </p>
        </footer>
      );
    case 2:
      return (
        <footer>
          <h3>Slimpie:</h3>
          <p>
            "Profiteer van de beste aanbiedingen voor vakantiebestemmingen van
            over de hele wereld en beleef de mooiste herinneringen in gezelschap
            van familie, vrienden of met de liefde van je leven. Onze website
            biedt eenvoudig een eindeloze selectie aan bestemmingen, waar je
            onbezorgd kunt genieten van je droomvakantie. Boek vandaag nog je
            vakantie en blijf op de hoogte van de laatste trends, tips & to do's
            voor een onvergetelijke reis."
          </p>
        </footer>
      );
    case 3:
      return (
        <footer>
          <h3>Slimpie:</h3>
          <p>
            "Geniet van je zoektocht en plannen van je volgende reis. Vergeet
            niet om het leven te leven, reis om je avonturen te starten en laat
            je dromen uitkomen!"
          </p>
        </footer>
      );
    case 4:
      return (
        <footer>
          <h3>Slimpie:</h3>
          <p>
            "Bedankt voor het zoeken naar je volgende vakantiebestemming op onze
            website. We hopen dat je de ideale bestemming voor jou hebt gevonden
            en dat je geniet van je verdiende tijd en heerlijke ontspanning!"
          </p>
        </footer>
      );
    case 5:
      return (
        <footer>
          <h3>Slimpie:</h3>
          <p>
            "Wij staan er voor om jouw perfecte vakantie te vinden met onze
            veelzijdige opties voor allerlei budgetten en reizigers. Laat je
            verrassen door de talrijke reiservaringen die we je kunnen aanbieden
            en begin vandaag nog je onvergetelijke reis!"
          </p>
        </footer>
      );
    default:
      return (
        <footer>
          <h3>Slimpie:</h3>
          <p>
            "Van strandvakanties tot stedentripjes, bij ons vind je kwalitatief
            hoogstaande opties voor een onvergetelijke reis. Met de beste
            aanbiedingen, beoordelingen en reisweergave, geeft Onze Reis het je
            allemaal - waar je ook naartoe gaat."
          </p>
        </footer>
      );
  }
}

export default Footer;
