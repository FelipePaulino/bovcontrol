import Paragraph from '../Paragraph'
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styles'

const ToGoBack = ({ text, click, color }) => {
    return (
        <S.ContainerGoBack onPress={click}>
            <MaterialIcons name="arrow-back" size={30} color={color}/>
            <Paragraph text={text} color={color} fontSize='30px' bold />
        </S.ContainerGoBack>
    )
}

export default ToGoBack