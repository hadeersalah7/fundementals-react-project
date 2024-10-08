import { useState, useCallback, useEffect } from 'react'
import './App.css'
import Loading from './componenets/Loading';
import Tours from './componenets/Tours';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [tours, setTours] = useState([])
  const url = 'https://www.course-api.com/react-tours-project';

  const fetchTours =  async () => {
    try {
      setIsLoading(true)
      const fetchedTours = await fetch(url)
      const tours = await fetchedTours.json()
      setTours(tours)
    } catch(e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  } 

  const removeTour = (id) => {
    const tour = tours.filter((tour) => tour.id !== id)
    setTours(tour)
}

  useEffect(() => {
  fetchTours()
}, [])

  if (isLoading) {
    return <main><Loading /> </main> 
  }
  
  if (tours.length === 0) {
    return <main>
    <h3>No more tours</h3>
    <button type='button' className='btn' style={{marginTop: "2rem"}} onClick={() => fetchTours()}>Reload Tours</button>
  </main>
}

  return (
    <>
      <div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </>
  )
}

export default App
