import Paragraph from '../Paragraph'
import * as S from './styles'

const Input = ({ label, onChange, value }) => {
    return (
        <S.ContainerInput>
            <Paragraph text={label} color='#000' bold />
            <S.InputText
                onChangeText={onChange}
                value={value}
            />
        </S.ContainerInput>
    )
}

export default Input