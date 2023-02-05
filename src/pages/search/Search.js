import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import "./Search.css";

function Search() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="searchPage">
      <header>
        <h1>Zoeken, zoeken, zoeken</h1>
        <h3>
          Vinden, vinden, vinden, vinden vinden, vinden, vinden vinden, vinden,
          vinden.
        </h3>
      </header>
      <main>
        <section className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("1 Kies het vliegveld vanwaar je vertrekt")}>
              <option value="Maastricht Aachen Airport">Maastricht Aachen Airport</option>
              <option value=" Eindhoven Airport"> Eindhoven Airport</option>
              <option value="Weeze Airport">Weeze Airport</option>
            </select>
            <input type="datetime-local" placeholder="2 Kies jouw vertrek datum" {...register("2 Kies jouw vertrek datum", {})} />
            <input type="range" placeholder="3 Geef je Budget aan" {...register("3 Geef je Budget aan", {, max: 5000, min: 0})} />

            <input type="submit" />
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
