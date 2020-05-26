import React from 'react'
import './App.css'
import jobs from 'data/jobs'

function App() {
  return (
    <div>
      <header></header>
      <main>
        <section>
          <ul>
            {jobs.map(job => (
              <li key={job.id}>{job.company}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
