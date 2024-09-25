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
      console.log("touurs",tours)
      setTours(tours)
    } catch(e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  } 

  useEffect(() => {
  fetchTours()
}, [])

  if (isLoading) {
    return <main><Loading /> </main> 
  }
  
  return (
    <>
      <div>
        <Tours tours={tours} />
      </div>
    </>
  )
}

export default App
