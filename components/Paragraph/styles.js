import styled from "styled-components/native";

export const TextParagraph = styled.Text`
    font-size: ${(props) => props.fontSize ? props.fontSize : '15px'};
    color: ${(props) => props.color ? props.color : '#000'};
    font-weight: ${(props) => props.bold ? 'bold' : '400'};
`