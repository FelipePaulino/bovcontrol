import * as S from './styles'
import Paragraph from '../Paragraph'

const InfoList = ({ text, textData }) => {
    return (
        <S.AlignText>
            <Paragraph text={text} bold />
            <Paragraph text={textData} />
        </S.AlignText>
    )
}

export default InfoList