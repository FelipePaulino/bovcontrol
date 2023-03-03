import * as S from './styles'

const Paragraph = ({text, fontSize, color, bold}) => {
    return (
        <S.TextParagraph fontSize={fontSize} color={color} bold={bold}>{text}</S.TextParagraph>
    )
}

export default Paragraph