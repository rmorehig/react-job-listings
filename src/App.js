import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/Header'
import JobList from 'components/JobList'
import data from './data'
import GlobalStyle from 'theme/Global'
import theme from 'theme'
import JobFilters from 'components/JobFilters'

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.neutral[0]};
`

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  padding-top: 76px;
  padding-bottom: 120px;
  position: relative;
`

function App() {
  const [filters, setFilters] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Main>
          {filters.length > 0 && (
            <JobFilters filters={filters} setFilters={setFilters} />
          )}
          <JobList jobs={data} setFilters={setFilters} />
        </Main>
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
