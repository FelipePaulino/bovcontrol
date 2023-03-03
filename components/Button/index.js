import Paragraph from '../Paragraph'
import * as S from './styles'

const Button = ({ text, color, background, onClick }) => {
    return (
        <S.ContainerButton>
            <S.ButtonComponent background={background} onPress={onClick}>
                <Paragraph text={text} color={color} bold />
            </S.ButtonComponent>
        </S.ContainerButton>
    )
}

export default Button