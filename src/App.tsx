import { GlobalStyle } from "./style/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./style/theme";
import TopBar from "./components/TopBar";
import WebStudioWorkspace from "./components/WebStudioWorkspace";
import { useWebStudioState } from "./state";
import SettingsModal from "./components/SettingsModal";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

import apiClient from "./services/apiClient";

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
  const loadProject = useWebStudioState((state) => state.loadProject);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("once");
    apiClient.getProject(1).then((projectResponse) => {
      console.log(projectResponse);
      loadProject(projectResponse);
      setIsLoading(false);
    });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <SettingsModal showModal={showModal} setShowModal={setShowModal} />
      <WebStudioContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <TopBar />
            <WebStudioWorkspace isJsEnabled={projectSettings.enableJs} />
          </>
        )}
      </WebStudioContainer>
    </ThemeProvider>
  );
}

export default App;
