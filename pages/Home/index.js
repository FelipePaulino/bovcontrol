import { useEffect, useState } from 'react'
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'

import { useFormReport } from '../../hooks/useFormReport';
import { Title, CardChecklist } from '../../components';
import * as S from './styles'

function Home() {
    const [checklist, setChecklist] = useState([])
    const { setChecklistData, updateChecklists } = useFormReport()

    const navigation = useNavigation();

    useEffect(() => {
        axios.get('http://challenge-front-end.bovcontrol.com/v1/checkList')
            .then((response) => {
                setChecklist(response.data)
            })
    }, [updateChecklists])

    const searchSelectedChecklist = (id) => {
        axios.get(`http://challenge-front-end.bovcontrol.com/v1/checkList/${id}`)
            .then((response) => {
                setChecklistData(response.data)
                navigation.navigate("ChecklistInfo")
            })
    }

    return (
        <S.Container>
            <ScrollView style={{ width: '100%' }}>
                <S.Content>
                    <Title text='Checklists' type='h1' color="#121212" bold />
                    {checklist.length > 0 && checklist.map((item, index) => {
                        return (
                            <CardChecklist data={item} key={index} onClick={() => searchSelectedChecklist(item._id)} />
                        )
                    })}
                </S.Content>
            </ScrollView>
        </S.Container>
    )
}

export default Home
