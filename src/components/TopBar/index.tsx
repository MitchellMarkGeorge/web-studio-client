import { IconContext } from "@react-icons/all-files";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import logo from "../../assets/logo.svg";
import { useWebStudioState } from "../../state";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
// import { HiPlay } from "@react-icons/all-files/hi/HiPlay";
import { HiPlay } from "react-icons/hi2";
import { useWorkspaceState } from "../../state/WorkspaceState";
import { buildPreviewUrl } from "../../services/preview";

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em 1rem;
  padding: 1rem;
  /* gap: 10px; */ // why gap
  color: ${(props) => props.theme.colors.primaryText};
  /* font-size: 0.94rem;  */
  font-size: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryBackground};
  flex: 0 1 auto; // isnt this the default???
  background-color: ${(props) => props.theme.colors.darkerBackground};
  /* background-color: #111; */
`;

const TopBarLogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* gap: 10px; */
  gap: 0.63rem;
  /* font-size: 1.13rem; */
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryText};
  user-select: none;
`;

const TopBarLogo = styled.img`
  /* height: 30px;
  width: 30px; */
  height: 2rem;
  width: 2rem;
`;

const TopBarButtonRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* gap: 16px; */
  gap: 1rem;
`;

const TopBarButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  /* padding: 0.625rem; */
  // think about this
  /* padding: 0.38rem 0.5rem; */
  padding: 0.5rem 0.75rem;
  /* padding: 0.625rem; */
  /* font-size: 0.94rem; */
  background-color: ${(props) => props.theme.colors.primaryAccent};
  font-weight: 400;
  gap: 0.31rem;
  border-radius: 0.5rem;
  :hover {
    // figure out hover color
    transition: all 0.3s ease;
    /* filter: brightness(80%); */
    background-color: #0452b7;
  }
`;

export default function TopBar() {
  // problem with this is that the top bar re renders whenever the code changes
  const runCode = useWorkspaceState((state) => state.runCode);

  const { projectName } = useWebStudioState((state) => state.projectSettings);
  // const updateCode = useWebStudioState(state => state.updateCode);
  const setShowModal = useWebStudioState((state) => state.setShowModal);
  const workspaceSettings = useWebStudioState(
    (state) => state.workspaceSettings
  );
  const [isCodeBuilding, setIsCodeBuilding] = useState(false);
  // const setPreviewUrl = useWebStudioState(state => state.setPreviewUrl)
  console.log("re-rendering");

  const onRunClicked = () => {
    setIsCodeBuilding(true);
    runCode().then(() => {
      setIsCodeBuilding(false);
    })
  }

  // const project
  return (
    <TopBarContainer>
      <TopBarLogoContainer href="/">
        <TopBarLogo src={logo} />
        <div>Web Studio</div>
      </TopBarLogoContainer>
      <div>{projectName || "Untitled"}</div>
      <TopBarButtonRowContainer>
        {!workspaceSettings.livePreview && (
          <TopBarButton onClick={onRunClicked} disabled={isCodeBuilding}>
            <HiPlay size={"1rem"} />
            <span>{isCodeBuilding ? "Building..." : "Run"}</span>
          </TopBarButton>
        )}
        <TopBarButton onClick={() => setShowModal(true)}>
          <AiFillSetting size={"1rem"} />
          <span>Settings</span>
        </TopBarButton>
      </TopBarButtonRowContainer>
    </TopBarContainer>
  );
}
