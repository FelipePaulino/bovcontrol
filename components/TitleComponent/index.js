
import Paragraph from '../Paragraph'
import * as S from './styles'

const Title = ({ text, type, color, bold }) => {

    function TypeTitle() {
        if (type === 'h1') {
            return '32px'
        }
        if (type === 'h2') {
            return '28px'
        }
        if (type === 'h3') {
            return '24px'
        }
        return '20px'
    }

    return (
        <S.ContainerTitle>
            <Paragraph text={text} fontSize={TypeTitle} color={color} bold={bold} />
        </S.ContainerTitle>
    )
}

export default Title