import { IconContext } from "@react-icons/all-files";
import React from "react";
import styled, { useTheme } from "styled-components";

import logo from "../../assets/logo.svg";
import { useWebStudioState } from "../../state";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { GiSaveArrow } from "@react-icons/all-files/gi/GiSaveArrow";

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 16px; // 15??
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryBackground};
  flex: 0 1 auto;
`;

const TopBarLogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryText};
  user-select: none;
`;

const TopBarLogo = styled.img`
  height: 30px;
  width: 30px;
`;

const TopBarButtonRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const TopBarButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 5px;
`;

export default function TopBar() {
  const { projectName } = useWebStudioState((state) => state.projectSettings);
  return (
    <TopBarContainer>
      <TopBarLogoContainer href="/">
        <TopBarLogo src={logo} />
        <div>Web Studio</div>
      </TopBarLogoContainer>
      <div>{projectName || "Untitled"}</div>
      <TopBarButtonRowContainer>
          {/* <TopBarButton>
            <FaPlay size={"14px"} />
            <div>Run</div>
          </TopBarButton> */}
          <TopBarButton>
            <GiSaveArrow size={"14px"} />
            <div>Save</div>
          </TopBarButton>
          <TopBarButton>
            <AiFillSetting  size={"14px"}/>
            <div>Settings</div>
          </TopBarButton>
      </TopBarButtonRowContainer>
    </TopBarContainer>
  );
}
