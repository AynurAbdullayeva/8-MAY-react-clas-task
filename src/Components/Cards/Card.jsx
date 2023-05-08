import React, { useEffect } from "react";

export default function Card({ movies }) {
  return (
    <>
      <div className="container">
        <div className="row">
            {movies &&
              movies.map((movie) => (
                <div className="col-3">

                <div className="card mt-5" key={movie.imdbID}>
                  <img src={movie.Poster} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Year}</p>
                <button className="btn"><i className="fa-regular fa-heart"></i></button>
                  </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
