import styled from "styled-components/native";

export const ContainerButton = styled.View`
    margin: 10px;
    gap: 5px;
`

export const ButtonComponent = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${(props) => props.background ? props.background : '#008000'};;
    border-radius: 5px;
`
