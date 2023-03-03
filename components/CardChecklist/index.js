import Paragraph from '../Paragraph'
import * as S from './styles'


const CardChecklist = ({ onClick, data }) => {
    const createDate = data && data.created_at.split('T')[0]
    return (
        <S.ContainerCardChecklist onPress={onClick}>
            <S.AlignText>
                <Paragraph text='Fazenda: ' bold />
                <Paragraph text={data?.farmer?.name} />
            </S.AlignText>
            <S.AlignText>
                <Paragraph text='Cidade: ' bold />
                <Paragraph text={data?.farmer?.city} />
            </S.AlignText>
            <S.ChecklistFarmer>
                <S.AlignText>
                    <Paragraph text='Nome: ' bold />
                    <Paragraph text={data?.from?.name} />
                </S.AlignText>
                <Paragraph text={createDate} bold />
            </S.ChecklistFarmer>
        </S.ContainerCardChecklist>
    )
}

export default CardChecklist