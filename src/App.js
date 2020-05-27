import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/Header'
import JobList from 'components/JobList'
import data from './data'
import GlobalStyle from 'theme/Global'
import theme from 'theme'
import JobFilters from 'components/JobFilters'
import bgDesktop from 'assets/bg-header-desktop.svg'
import bgMobile from 'assets/bg-header-mobile.svg'

const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.neutral[0]};
`

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  padding: 76px 120px 120px;
  position: relative;
  width: 100%;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  ${props => props.theme.breakpoints.sm} {
    padding: 60px 24px 34px;
  }
`

function App() {
  const [filters, setFilters] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header backgroundDesktop={bgDesktop} backgroundMobile={bgMobile} />
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
