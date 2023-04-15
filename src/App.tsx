import { GlobalStyle } from "./style/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./style/theme";
import TopBar from "./components/TopBar";
import WebStudioWorkspace from "./components/WebStudioWorkspace";
import { useWebStudioState } from "./state";
import SettingsModal from "./components/SettingsModal";

const WebStudioContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkerBackground};
`;

function App() {
  const projectSettings = useWebStudioState((state) => state.projectSettings);
  const showModal = useWebStudioState((state) => state.showModal);
  const setShowModal = useWebStudioState((state) => state.setShowModal);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <SettingsModal showModal={showModal} setShowModal={setShowModal} />
      <WebStudioContainer>
        <TopBar />
        <WebStudioWorkspace isJsEnabled={projectSettings.enableJs} />
      </WebStudioContainer>
    </ThemeProvider>
  );
}

export default App;
