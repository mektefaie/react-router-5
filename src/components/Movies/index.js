import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom'
import MovieDetails from '../MovieDetails/index'

function Movies({ movies }) {
  const { url } = useRouteMatch() // Get the base URL for nested routes

  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map(({ id, title }) => (
          <NavLink key={id} to={`${url}/${id}`}>
            <h2>{title}</h2>
          </NavLink>
        ))}
      </nav>

      {/* Define routes inside a Switch */}
      <Switch>
        <Route path={`${url}/:movieId`}>
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  )
}

export default Movies
