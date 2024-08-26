import { useParams } from 'react-router-dom'

function MovieDetails({ movies }) {
  const { movieId } = useParams() // Extract the movieId from URL parameters

  // Find the movie that matches the movieId
  const movieChoice = movies.find(movie => movie.id === parseInt(movieId, 10)) // Ensure ID comparison is of same type

  if (!movieChoice) {
    return <div className='comp purple'>Movie not found</div> // Handle the case where the movie is not found
  }

  const { title, description } = movieChoice

  return (
    <div className='comp purple'>
      <h1>{title}</h1> {/* Display the title of the selected movie */}
      <p>{description}</p> {/* Display the description of the selected movie */}
    </div>
  )
}

export default MovieDetails
