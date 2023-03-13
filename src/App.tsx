import { GlobalStyle } from './style/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './style/theme'
import TopBar from './components/TopBar'

const WebStudioContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primaryBackground};
`

function App() {
  

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <WebStudioContainer>
      <TopBar/>
      </WebStudioContainer>
    </ThemeProvider>
  )
}

export default App
