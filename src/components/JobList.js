import React from 'react'
import styled from 'styled-components'
import Job from './Job'

const JobListWrapper = styled.ul`
  li:not(:first-child) {
    margin-top: 24px;
  }
`
const JobList = ({ jobs = [], setFilters }) => {
  return (
    <section>
      <JobListWrapper>
        {jobs.map(({ id, ...rest }) => (
          <Job key={id} {...rest} setFilters={setFilters} />
        ))}
      </JobListWrapper>
    </section>
  )
}

export default JobList
