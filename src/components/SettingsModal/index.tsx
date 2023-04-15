import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import ProjectSettings from "./components/SettingSections/ProjectSettings";
import StudioSettings from "./components/SettingSections/StudioSettings";
import { GeneralSettingsButton } from "./components/GeneralSettingsButton";
import { SettingsFooter } from "./components/SettingsFooter";
import WorkspaceSettings from "./components/SettingSections/WorkspaceSettings";
import EditorSettings from "./components/SettingSections/EditorSettings";
import JavascriptSettings from "./components/SettingSections/JavascriptSettings";
import HTMLSettings from "./components/SettingSections/HTMLSettings";
import CSSSettings from "./components/SettingSections/CSSSettings";

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
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 2;
  backdrop-filter: blur(3px);
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 37.5rem;
  height: 37.5rem;
  // think about this
  /* border: 2px solid ${(props) => props.theme.colors.secondaryBackground}; */
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  background-color: ${(props) => props.theme.colors.darkerBackground};
  z-index: 2;
  border-radius: 0.5rem;
`;

const SettingsHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryText};
`;

const SettingModalConainter = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

const SettingModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.88rem 0;
  gap: 0.63rem;
`;

const SettingModalButton = styled(GeneralSettingsButton)<{
  isSelected: boolean;
}>`
  flex: 1;
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primaryText
      : props.theme.colors.secondaryText};
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primaryAccent
      : props.theme.colors.secondaryBackground};
`;

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

// const sectionSettingsName = ["Studio", "Project", "Editor", "JavaScript", "HTML", "CSS"];
// const section

export default function SettingsModal({ showModal, setShowModal }: Props) {
  const modalBackgroundRef = useRef<HTMLDivElement | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  // will just make this into 2 arrays
  const settingSections = useMemo(() => ({
    Workspace: WorkspaceSettings,
    Project: ProjectSettings,
    Editor: EditorSettings,
    JavaScript: JavascriptSettings,
    HTML: HTMLSettings,
    CSS: CSSSettings,
  }), []);

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

  const SelectedSettingSection =
    Object.values(settingSections)[selectedMenuItem];
    // need focus-trap
  return (
    <>
      {showModal ? (
          <Background onClick={closeModal} ref={modalBackgroundRef}>
            <ModalWrapper>
              {/* {children} */}
              <SettingModalConainter>
                <SettingsHeading>Settings</SettingsHeading>
                <SettingModalButtonContainer>
                  {Object.keys(settingSections).map((sectionName, index) => (
                    <SettingModalButton
                      key={sectionName}
                      onClick={() => setSelectedMenuItem(index)}
                      isSelected={selectedMenuItem === index}
                    >
                      {sectionName}
                    </SettingModalButton>
                  ))}
                </SettingModalButtonContainer>
                <SelectedSettingSection />
                <SettingsFooter closeModal={() => setShowModal(false)}/>
              </SettingModalConainter>
            </ModalWrapper>
          </Background>
      ) : null}
    </>
  );
}
