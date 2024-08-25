import { Redirect, useHistory } from 'react-router-dom'

function Stocks() {
  const loggedIn = true
  const history = useHistory()

  // Redirect if not logged in
  if (loggedIn === false) return <Redirect to='/not-logged-in' />

  const handleClick = () => {
    window.alert('Sending info to the DB!')
    // Navigate to the Home component
    history.push('/')
  }

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  )
}

export default Stocks
