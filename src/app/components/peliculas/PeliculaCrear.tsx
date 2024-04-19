const generos = [
  {
    genero: "Accion",
    valor: 1,
  },
  {
    genero: "Drama",
    valor: 2,
  },
  {
    genero: "Romance",
    valor: 3,
  },
  {
    genero: "Shonen",
    valor: 4,
  },
  {
    genero: "Comedia",
    valor: 5,
  },
];
export const PeliculaCrear = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="col-md-6 p-5 mb-4 bg-dark rounded-3">
        <h1 className="text-center mt-2 text-white">Crear pelicula</h1>
          <form className="row g-3 needs-validation" noValidate>
            <div className="row mt-4">
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control border-success"
                  id="validationCustom01"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label text-white">
                  Distribuidor
                </label>
                <input
                  type="text"
                  className="form-control border-success"
                  id="validationCustom02"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="validationCustom05" className="form-label text-white">
                  Fecha de estreno
                </label>
                <input
                  type="date"
                  className="form-control border-success"
                  id="validationCustom05"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label text-white">
                  Genero
                </label>
                <select
                  className="form-select border-success"
                  id="validationCustom04"
                  required
                >
                  <option selected disabled value="">
                    Escoge...
                  </option>
                  {generos.map((genero) => (
                    <option value={genero.valor}> {genero.genero} </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-12 ms-1">
              <button className="btn btn-success" type="submit">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
