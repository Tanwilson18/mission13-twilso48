import { useState } from 'react';
import data from './MovieDataSample.json';

const movie = data.MovieDataSample;

function MovieList() {
  const [listOMovies, setOMovies] = useState(movie);

  const addMovie = () => {
    setOMovies([
      ...movie,
      {
        Category: 'Action/Adventure',
        Title: 'Iron Man',
        Year: 2008,
        Director: 'Jon Favreau',
        Rating: 'PG-13',
      },
    ]);
  };
  return (
    <>
      <div>
        <h3>Joe Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title </th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
