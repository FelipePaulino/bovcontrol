import Paragraph from '../Paragraph'
import { Picker } from '@react-native-picker/picker';

import * as S from './styles'

const PickerSelect = ({ label, value, onChange, data }) => {
    return (
        <S.ContainerPicker>
            <Paragraph text={label} bold />
            <S.PickerContent>
                <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                >
                    <Picker.Item label='Selecione' value={undefined}/>
                    {data && data.map((item, index) => {
                        return (
                            <Picker.Item label={item.name} value={item.value} key={index} />
                        )
                    })}
                </Picker>
            </S.PickerContent>
        </S.ContainerPicker>
    )
}

export default PickerSelect