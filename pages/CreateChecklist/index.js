import axios from 'axios';
import { ScrollView } from 'react-native';
import { useState } from 'react'

import { Button, Title, Input, PickerSelect } from '../../components';
import { useFormReport } from '../../hooks/useFormReport';
import * as S from './styles'


export default function CreateChecklist() {
    const [type, setType] = useState('Selecione')
    const [milkProduced, setMilkProduced] = useState()
    const [nameFarm, setNameFarm] = useState('')
    const [cityFarm, setCityFarm] = useState('')
    const [fromName, setFromName] = useState('')
    const [toName, setToName] = useState('')
    const [cowsHead, setCowsHead] = useState()
    const [hadSupervision, setHadSupervision] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const { updateChecklists, setUpdateChecklists } = useFormReport()


    const data = [{
        _id: Math.random().toString(),
        type,
        amount_of_milk_produced: parseInt(milkProduced),
        farmer: {
            name: nameFarm,
            city: cityFarm,
        },
        from: {
            name: fromName
        },
        to: {
            name: toName
        },
        number_of_cows_head: parseInt(cowsHead),
        had_supervision: Boolean(hadSupervision),
        location: {
            latitude: parseInt(latitude),
            longitude: parseInt(longitude)
        },
        created_at: new Date(),
        updated_at: new Date()
    }]

    const dataType = [
        { name: 'BPA', value: 'BPA' },
        { name: 'BPF', value: 'BPF' },
        { name: 'Antibiótico', value: 'Antibiótico' }
    ]

    const dataSupervision = [
        { name: 'Sim', value: true },
        { name: 'Não', value: false }
    ]

    const handleSubmit = async () => {
        axios.post('http://challenge-front-end.bovcontrol.com/v1/checkList', {
            checklists: data
        }).then(() => {
            alert('Fazenda cadastrada.');
            setUpdateChecklists(!updateChecklists)
        }).catch(() => {
            if (!type || !milkProduced || !nameFarm || !cityFarm || !fromName || !toName || !cowsHead) {
                alert('Preencha todos os campos!');
            } else {
                alert('Algo deu errado, tente novamente mais tarde!')
            }

        });
    };

    function numberMask(value) {
        return value?.replace(/\D/g, "")
    }

    return (
        <S.Container>
            <ScrollView style={{ width: '100%' }}>
                <S.Content>
                    <Title text='Criar Checklist' type='h1' color="#121212" bold />
                    <S.ContentInformation>
                        <Input
                            label='Nome Fazenda:' Input
                            onChange={setNameFarm}
                            value={nameFarm}
                        />
                        <Input
                            label='Cidade:'
                            onChange={setCityFarm}
                            value={cityFarm}
                        />
                        <Input
                            label='Nome Fazendeiro:'
                            onChange={setFromName}
                            value={fromName}
                        />
                        <Input
                            label='Supervisor:'
                            onChange={setToName}
                            value={toName}
                        />
                        <PickerSelect
                            data={dataType}
                            label='Tipo de Checklist'
                            onChange={(value) => setType(value)}
                            value={type}
                        />
                        <Input
                            label='Quantidade de Cabeças de gado:'
                            onChange={setCowsHead}
                            value={numberMask(cowsHead)}
                            keyboardType="numeric"
                        />
                        <Input
                            label='Quantidade de Leite por mês:'
                            onChange={setMilkProduced}
                            value={numberMask(milkProduced)}
                        />
                        <Input
                            label='Latitude:'
                            onChange={setLatitude}
                            value={numberMask(latitude)}
                            keyboardType="numeric"
                        />
                        <Input
                            label='Longitude:'
                            onChange={setLongitude}
                            value={numberMask(longitude)}
                            keyboardType="numeric"
                        />
                        <PickerSelect
                            data={dataSupervision}
                            label='Foi supervisionado no ultimo mês?'
                            onChange={setHadSupervision}
                            value={hadSupervision}
                        />
                        <Button text='Cadastrar' color='#fff' onClick={handleSubmit} />
                    </S.ContentInformation>
                </S.Content>
            </ScrollView>
        </S.Container>
    );
}