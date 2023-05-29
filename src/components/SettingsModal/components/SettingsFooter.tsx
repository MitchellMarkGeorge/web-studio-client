import styled from "styled-components";
import { GeneralSettingsButton } from "./GeneralSettingsButton";
import { useSettingModalState } from "../../../state/SettingsModalState";

const SettingsFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// TODO think about this
const SavedStatusText = styled.div`
  /* text-decoration: underline; */
  color: ${(props) => props.theme.colors.secondaryText};
  /* font-weight: 510; */
  /* font-size: 0.75rem; */
  /* font-size: 0.875rem; */
  font-size: 0.75rem;
  /* cursor: pointer; */
`;

const SettingsFooterButtonContianer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.63rem;
  align-items: center;
`;

const SettingsSaveButton = styled(GeneralSettingsButton)`
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.primaryAccent};
  :hover {
    // figure out hover color
    transition: all 0.3s ease;
    /* filter: brightness(80%); */
    background-color: #0452b7;
  }
`;

const SettingsCancelButton = styled(GeneralSettingsButton)`
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  // figure out hover for this one
`;

interface Props {
  closeModal: () => void;
}

export const SettingsFooter = (props: Props) => {
  const saveSettings = useSettingModalState(state => state.saveSettings);
  const isUnsaved = useSettingModalState(state => state.isUnsaved);
  // const setShowModal = use
  return (
    <SettingsFooterContainer>
      <SavedStatusText>{isUnsaved ? "Unsaved Changes" : "All Saved Changes"}</SavedStatusText>
      <SettingsFooterButtonContianer>
        <SettingsCancelButton onClick={props.closeModal}>Cancel</SettingsCancelButton>
        <SettingsSaveButton onClick={saveSettings}>Save Settings</SettingsSaveButton>
      </SettingsFooterButtonContianer>
    </SettingsFooterContainer>
  );
};
