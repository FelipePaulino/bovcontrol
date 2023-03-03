import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #939e95;
`;

export const Content = styled.View`
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px 0 50px;
    gap: 10px;
`;

export const CardChecklist = styled.TouchableOpacity`
    width: 90%;
    margin: 5px 0;
    padding: 5px 10px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const ChecklistFarmer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const AlignText = styled.View`
    flex-direction: row;
`