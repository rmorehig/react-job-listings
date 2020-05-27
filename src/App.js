import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from 'components/Header'
import JobList from 'components/JobList'
import data from './data'
import GlobalStyle from 'theme/Global'
import theme from 'theme'

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.neutral[0]};
`

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  padding-top: 52px;
  padding-bottom: 120px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Main>
          <JobList jobs={data} />
        </Main>
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
