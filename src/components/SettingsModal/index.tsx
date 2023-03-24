import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProjectSettings from "./SettingSections/ProjectSettings";
import StudioSettings from "./SettingSections/StudioSettings";

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 20vh;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  /* backdrop-filter: blur(3px); */
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 800px;
  /* width: 800px; */
  height: 500px;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  z-index: 2;
  border-radius: 8px;
`;

const SettingsHeading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryText};
`;

const SettingMenuConainter = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SettingMenuButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 10px;
`;

const SettingMenuButton = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  flex: 1;
  color: ${(props) => props.theme.colors.primaryText};
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primaryAccent
      : props.theme.colors.secondaryBackground};
`;

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  //   children: React.ReactNode;
}

// const sectionSettingsName = ["Studio", "Project", "Editor", "JavaScript", "HTML", "CSS"];
// const section

export default function SettingsModal({ showModal, setShowModal }: Props) {
  const modalBackgroundRef = useRef<HTMLDivElement | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  // will just make this into 2 arrays
  const settingSections = {
    // "Studio": StudioSettings,
    "Project": ProjectSettings,
    "Editor": StudioSettings,
    "JavaScript": StudioSettings,
    "HTML": StudioSettings,
    "CSS": StudioSettings,

  }

  const onKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (showModal && event.key === "Escape") {
        setShowModal(false);
      }
    },
    [showModal, setShowModal]
  );

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalBackgroundRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  });

const SelectedSettingSection =  Object.values(settingSections)[selectedMenuItem];
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalBackgroundRef}>
          <ModalWrapper>
            {/* {children} */}
            <SettingMenuConainter>
              <SettingsHeading>Settings</SettingsHeading>
              <SettingMenuButtonContainer>
              {Object.keys(settingSections).map((sectionName, index) => (
                <SettingMenuButton key={sectionName} onClick={() => setSelectedMenuItem(index)} isSelected={selectedMenuItem === index}>{sectionName}</SettingMenuButton>
              ))}
                {/* <SettingMenuButton isSelected>Studio</SettingMenuButton>
                <SettingMenuButton isSelected={false}>Project</SettingMenuButton>
                <SettingMenuButton isSelected={false}>Editor</SettingMenuButton>
                <SettingMenuButton isSelected={false}>JavaScript</SettingMenuButton>
                <SettingMenuButton isSelected={false}>HTML</SettingMenuButton>
                <SettingMenuButton isSelected={false}>CSS</SettingMenuButton> */}
              </SettingMenuButtonContainer>
              {<SelectedSettingSection/>}

            </SettingMenuConainter>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
