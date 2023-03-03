import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

import { useFormReport } from '../../hooks/useFormReport';
import { Paragraph, ToGoBack, Title, Input, PickerSelect, Button, InfoList } from '../../components';
import * as S from './styles'

function ChecklistInfo() {
    const { checklistData, setChecklistData } = useFormReport()
    const [tabViewEdit, setTabViewEdit] = useState(false)

    const navigation = useNavigation();

    const data = {
        type: checklistData?.type,
        amount_of_milk_produced: parseInt(checklistData?.amount_of_milk_produced),
        farmer: {
            name: checklistData?.farmer.name,
            city: checklistData?.farmer.city,
        },
        from: {
            name: checklistData?.from.name
        },
        to: {
            name: checklistData?.to.name
        },
        number_of_cows_head: parseInt(checklistData?.number_of_cows_head),
        had_supervision: Boolean(checklistData?.had_supervision),
        updated_at: new Date()
    }

    const dataType = [
        { name: 'BPA', value: 'BPA' },
        { name: 'BPF', value: 'BPF' },
        { name: 'Antibiótico', value: 'Antibiótico' }
    ]

    const dataSupervision = [
        { name: 'Sim', value: true },
        { name: 'Não', value: false }
    ]

    const updateChecklist = (id) => {
        axios.put(`http://challenge-front-end.bovcontrol.com/v1/checkList/${id}`, data).then(() => {
            alert('Cadastro Atualizado');
            setTabViewEdit(false)
        })
            .catch(() => {
                alert('Algo deu errado, tente novamente mais tarde!');
            });
    };

    function numberMask(value) {
        return value.length && value?.replace(/\D/g, "")
    }

    const createDate = checklistData && checklistData.created_at.split('T')[0]
    const UpdateDate = checklistData && checklistData.updated_at.split('T')[0]

    return (
        <S.Container>
            {!tabViewEdit &&
                <S.Content>
                    <ToGoBack text='Voltar' click={() => navigation.navigate("Home")} color="#121212" />
                    {checklistData &&
                        <S.ContentInformation>
                            <Title text={checklistData.farmer.name} type='h1' bold />
                            <S.ContentDetails>
                                <InfoList text='Fazenda: ' textData={checklistData.farmer.name} />
                                <InfoList text='Cidade: ' textData={checklistData.farmer.city} />
                                <InfoList text='Fazendeiro: ' textData={checklistData.from.name} />
                                <InfoList text='Supervisor: ' textData={checklistData.to.name} />
                                <InfoList text='Tipo: ' textData={checklistData.type} />
                                <InfoList text='Cabeças de gado: ' textData={checklistData.number_of_cows_head} />
                                <InfoList text='Quantidade de leite produzida: ' textData={checklistData.amount_of_milk_produced} />
                                <InfoList text='Latitude: ' textData={checklistData.location.latitude} />
                                <InfoList text='Longitude: ' textData={checklistData.location.longitude} />
                                <InfoList text='Foi supervisionado no ultimo mês?: ' textData={checklistData.had_supervision ? 'Sim' : 'Não'} />
                                <InfoList text='Criado em: ' textData={createDate} />
                                <InfoList text='Atualizado em: ' textData={UpdateDate} />
                            </S.ContentDetails>
                            <Button text='Editar' color='#fff' onClick={() => setTabViewEdit(true)} />
                        </S.ContentInformation>
                    }
                </S.Content>
            }
            {tabViewEdit &&
                <ScrollView style={{ width: '100%' }}>
                    <S.Content>
                        <ToGoBack text='Voltar' click={() => setTabViewEdit(false)} color="#121212" />

                        <S.ContentInformation>
                            <Input
                                label='Nome Fazenda'
                                onChange={(value) => setChecklistData({ ...checklistData, farmer: { ...checklistData.farmer, name: value } })}
                                value={checklistData.farmer.name}
                            />

                            <Input
                                label='Cidade'
                                onChange={(value) => setChecklistData({ ...checklistData, farmer: { ...checklistData.farmer, city: value } })}
                                value={checklistData.farmer.city}
                            />

                            <Input
                                label='Nome Fazendeiro'
                                onChange={(value) => setChecklistData({ ...checklistData, from: { ...checklistData.from, name: value } })}
                                value={checklistData.from.name}
                            />

                            <Input
                                label='Supervisor'
                                onChange={(value) => setChecklistData({ ...checklistData, to: { ...checklistData.to, name: value } })}
                                value={checklistData.to.name}
                            />

                            <PickerSelect
                                data={dataType}
                                label='Tipo de Checklist'
                                onChange={(value) => setChecklistData({ ...checklistData, type: value })}
                                value={checklistData.type}
                            />

                            <Input
                                label='Quantidade de Cabeças de gado:'
                                onChange={(value) => setChecklistData({ ...checklistData, number_of_cows_head: numberMask(value) })}
                                value={checklistData?.number_of_cows_head ? checklistData?.number_of_cows_head : ''}
                                keyboardType="numeric"
                            />

                            <Input
                                label='Quantidade de Leite por mês:'
                                onChange={(value) => setChecklistData({ ...checklistData, amount_of_milk_produced: numberMask(value) })}
                                value={checklistData?.amount_of_milk_produced ? checklistData?.amount_of_milk_produced : ''}
                            />

                            <Input label='Latitude:'
                                onChange={(value) => setChecklistData({ ...checklistData, location: { ...checklistData.location, latitude: value } })}
                                value={checklistData?.location?.latitude.toString()}
                            />

                            <Input
                                label='Longitude'
                                onChange={(value) => setChecklistData({ ...checklistData, location: { ...checklistData.location, longitude: value } })}
                                value={checklistData?.location?.longitude.toString()}
                            />

                            <PickerSelect
                                data={dataSupervision}
                                label='Foi supervisionado no ultimo mês?'
                                onChange={(value) => setChecklistData({ ...checklistData, hadSupervision: value })}
                                value={checklistData.had_supervision ? true : false}
                            />

                            <S.ContentButton>
                                <Button text='Voltar' color='#fff' onClick={() => setTabViewEdit(false)} />
                                <Button text='Atualizar Cadastro' color='#fff' onClick={() => updateChecklist(checklistData.id)} />
                            </S.ContentButton>

                        </S.ContentInformation>
                    </S.Content>
                </ScrollView>
            }
        </S.Container>
    )
}

export default ChecklistInfo
