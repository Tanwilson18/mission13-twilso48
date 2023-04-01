import data from './MovieDataSample.json';

const movie = data.MovieDataSample;

function MovieList() {
  return (
    <>
      <div>
        <h3>Joe Hilton's Movie Collection</h3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <th>Title </th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
              </th>
            </tr>
          </thead>
          <tbody>
            {movie.map((m) => (
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
    </>
  );
}
