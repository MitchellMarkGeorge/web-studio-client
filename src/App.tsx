import { GlobalStyle } from "./style/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./style/theme";
import TopBar from "./components/TopBar";
import WebStudioEditor from "./components/WebStudioEditor";
import { useWebStudioState } from "./state";

const WebStudioContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryBackground};
`;

function App() {
  const projectSettings = useWebStudioState((state) => state.projectSettings);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <WebStudioContainer>
        <TopBar />
        <WebStudioEditor isJsEnabled={projectSettings.enableJs} />
      </WebStudioContainer>
    </ThemeProvider>
  );
}

export default App;
