import { useState } from 'react';
import data from './MovieData.json';
import styles from './blah.module.css';

const mds = data.MovieData;

// list of movies
function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(mds);
  const addMovie = () => {
    setListOfMovies([
      ...mds,
      // add a movie to the list using the button
      {
        Category: 'Action/Adventure',
        Title: 'Avengers, The',
        Year: 2012,
        Director: 'Joss Whedon',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3 className={styles.h1}>Joel Hilton's Movie Collection</h3>
      </div>
      <br />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m, index) => (
              <tr key={index}>
                <td>{m.Category}</td>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
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
