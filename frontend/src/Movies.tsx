import { useState } from 'react';
import data from './MovieData.json';
import styles from './blah.module.css';

const mds = data.MovieData;

//My movie list funtion that extract data from my MovieData.json file and put it into a table
function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(mds);
  const addMovie = () => {
    setListOfMovies([
      ...mds,
      //Adding one of my favorite movies to the collection by using the add movie button created below
      {
        Category: 'Action/Adventure',
        Title: 'Avengers, The',
        Year: 2012,
        Director: 'Joss Whedon',
        Rating: 'PG-13',
      },
    ]);
  };
  //Creating the collection table, for the tbody I created an index that would create a unique key for each movie and allow me to add my new movie just once
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
