import { useState, useEffect } from 'react'
import JobsInfo from './components/JobsInfo';
function App() {
  const url = 'https://www.course-api.com/react-tabs-project';
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setJobs(data)
    setIsLoading(false)
    console.log(data)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
    </section>
  )
}

  return (
    <>
      <section className='jobs-center'>
        <JobsInfo jobs={ jobs} />
      </section>

    </>
  )
}

export default App
