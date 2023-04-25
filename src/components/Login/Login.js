import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../../context/AuthContext.js";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault(); // voorkomt standaard gedrag van de submit-knop

    // stel de JSON-gegevens samen voor de POST-request
    const data = {
      username: username,
      password: password,
    };

    // voer de POST-request uit naar de backend
    fetch(
      "https://frontend-educational-backend.herokuapp.com/api/auth/signin",
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
        // als Inloggen succesvol was, toon dan de successmelding en bewaar het authorisatie-token
        alert("Inloggen is succesvol!");
        const token = data.accessToken;
        console.log(token);
        setToken(token);
        // sla het token op in localstorage of cookies om het te bewaren voor toekomstige aanvragen
      })
      .catch((error) => {
        // als het inloggen is mislukt, toon dan de foutmelding
        alert("Inloggen mislukt: " + error);
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

      <label htmlFor="password">Wachtwoord:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <button type="submit">Inloggen</button>
    </form>
  );
}

export default LoginForm;
