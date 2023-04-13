import styled from "styled-components";

const SettingOptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryBackground};
`;

const SettingOptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.375rem;  */
  gap: 0.3125rem;
`;

const SettingName = styled.div`
  font-weight: 510;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primaryText};
`;

const SettingDesction = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;

interface Props {
  settingName: string;
  settingDescription: string;
  inputElement: React.ReactNode; // think about this
}

export const SettingsOption = ({
  settingName,
  settingDescription,
  inputElement,
}: Props) => {
  return (
    <SettingOptionContainer>
      <SettingOptionTextContainer>
        <SettingName>{settingName}</SettingName>
        <SettingDesction>{settingDescription}</SettingDesction>
      </SettingOptionTextContainer>
      {inputElement}
    </SettingOptionContainer>
  );
};
