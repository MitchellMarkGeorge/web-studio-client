import { IconContext } from "@react-icons/all-files";
import React from "react";
import styled, { useTheme } from "styled-components";

import logo from "../../assets/logo.svg";
import { useWebStudioState } from "../../state";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
// import { HiPlay } from "@react-icons/all-files/hi/HiPlay";
import { HiPlay } from "react-icons/hi2";
import { useWorkspaceContext } from "../../contexts/WorkspaceContext";
import { buildPreviewUrl } from "../../services/preview";

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em 1rem;
  /* gap: 10px; */ // why gap
  color: ${(props) => props.theme.colors.primaryText};
  /* font-size: 0.94rem;  */
  font-size: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryBackground};
  flex: 0 1 auto; // isnt this the default???
  /* background-color: ${(props) => props.theme.colors.primaryBackground}; */
  background-color: #111;
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
  display: flex;
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
  const { runCode } = useWorkspaceContext();

  const { projectName } = useWebStudioState((state) => state.projectSettings);
  // const updateCode = useWebStudioState(state => state.updateCode);
  const setShowModal = useWebStudioState((state) => state.setShowModal);
  // const setPreviewUrl = useWebStudioState(state => state.setPreviewUrl)
  console.log("re-rendering");

  // const project
  return (
    <TopBarContainer>
      <TopBarLogoContainer href="/">
        <TopBarLogo src={logo} />
        <div>Web Studio</div>
      </TopBarLogoContainer>
      <div>{projectName || "Untitled"}</div>
      <TopBarButtonRowContainer>
        <TopBarButton onClick={runCode}>
          <HiPlay size={"1rem"} />
          <span>Run</span>
        </TopBarButton>
        <TopBarButton onClick={() => setShowModal(true)}>
          <AiFillSetting size={"1rem"} />
          <span>Settings</span>
        </TopBarButton>
      </TopBarButtonRowContainer>
    </TopBarContainer>
  );
}
