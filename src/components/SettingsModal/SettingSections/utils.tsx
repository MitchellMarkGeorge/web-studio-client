import styled from "styled-components";

export const SettingSectionContainer = styled.div`
   height: 100%;
   width: 100%; 
   padding-top: 10px;
   padding-bottom: 10px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   color: ${props => props.theme.colors.secondaryText};
`

export const SettingsOptionField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    /* justify-content: center; */
`

export const SettingsInput = styled.input`
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.secondaryText};
    border-radius: 8px;
    background-color: transparent;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    color: ${props => props.theme.colors.secondaryText};


`