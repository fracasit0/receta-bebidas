import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: '',
    categoria: '',
  });
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  //funcon para leer los contenidos
  const obtenerDatosRecetas = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria o Ingrediente</legend>
      </fieldset>

      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Busca por ingredientes"
            onChange={obtenerDatosRecetas}
          />
        </div>

        <div className="col-md-4">
          <select
            type="text"
            name="categoria"
            className="form-control"
            onChange={obtenerDatosRecetas}
          >
            <option value="">--- selecciona categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Recetas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
