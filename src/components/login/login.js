import React, { useState } from "react";
import "./login.css";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // voorkomt standaard gedrag van de submit-knop

    // stel de JSON-gegevens samen voor de POST-request
    const data = {
      username: username,
      email: email,
      password: password,
      role: ["user"], // geef de gebruiker de 'user'-rol
    };

    // voer de POST-request uit naar de backend
    fetch(
      "https://frontend-educational-backend.herokuapp.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // als de registratie succesvol was, toon dan de successmelding en bewaar het authorisatie-token
        alert("Registratie succesvol!");
        const token = data.accessToken;
        console.log(token);
        // sla het token op in localstorage of cookies om het te bewaren voor toekomstige aanvragen
      })
      .catch((error) => {
        // als de registratie is mislukt, toon dan de foutmelding
        alert("Registratie mislukt: " + error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Gebruikersnaam:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />

      <label htmlFor="email">E-mailadres:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password">Wachtwoord:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <button type="submit">Registreren</button>
    </form>
  );
}

export default SignupForm;
