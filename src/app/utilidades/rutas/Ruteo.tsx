import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../components/contenedor/Inicio";
import { PeliculaCrear } from "../../components/peliculas/PeliculaCrear";

import { NoEncontrado } from "../../components/contenedor/NoEncontrado";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/peliculas" element={<PeliculaCrear />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
