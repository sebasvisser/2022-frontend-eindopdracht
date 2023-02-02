import React from "react";

function NavBar() {
  return (
    <nav>
      {/*onderstaande buttons nog tot component maken met children en properties, = criteria*/}
      <button type="button">Homepagina</button>

      <button type="button">Zoekpagina</button>

      <button type="button">Resultaatpagina</button>

      <button type="button">Donatiepagina</button>

      <button type="button">Profielpagina</button>
    </nav>
  );
}

export default NavBar;
