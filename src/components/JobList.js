import React from 'react'
import Job from './Job'

const JobList = ({ jobs = [] }) => {
  return (
    <section>
      <ul>
        {jobs.map(({ id, ...rest }) => (
          <Job key={id} {...rest} />
        ))}
      </ul>
    </section>
  )
}

export default JobList
