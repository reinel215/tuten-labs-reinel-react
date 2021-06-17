import React, { useState } from 'react';
import Paper from '../../Atoms/Paper/Paper';
import CenterContent from '../../Atoms/Layout/CenterContent/CenterContent';
import PaperTitle from '../../Atoms/Paper/PaperTitle/PaperTitle';
import Button from '../../Atoms/Form/Button/Button';
import FormWrapper from '../../Atoms/Form/FormWrapper/FormWrapper';
import GridContainer from '../../Atoms/Layout/GridContainer/GridContainer';
import GridItem from '../../Atoms/Layout/GridItem/GridItem';
import SecondaryText from '../../Atoms/Texts/SecondaryText/SecondaryText'

import * as hourService from '../../../services/hour';

const ConvertHour = () => {

    const [hour, setHour] = useState("");
    const [responseHour, setResponseHour] = useState(null);


    const getHour = async (e) => {
        e.preventDefault();

        if (!hour) return;

        const newHour = await hourService.convertHour({
            time: hour + ":00",
            zone: -3
        });

        console.log(newHour);
        setResponseHour(newHour)


    }

    return (
        <CenterContent>
            <Paper style={{ width: "60%", minWidth: 300 }} >

                <SecondaryText> la timezone esta fijada a -3 </SecondaryText>
                <PaperTitle> Hour Java </PaperTitle>

                <FormWrapper onSubmit={getHour} >
                    <GridContainer>

                        <GridItem col={8}>
                            <input
                                type="time"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </GridItem>



                        <GridItem col={4}>
                            <Button
                                type="submit"
                            >
                                Convertir
                            </Button>
                        </GridItem>

                    </GridContainer>
                </FormWrapper>

                {
                    responseHour ?
                        <>
                            <p>Response:</p>
                            <p>{responseHour.response.time}</p>
                        </>
                        :
                        null
                }


            </Paper>
        </CenterContent>
    )
}

export default ConvertHour
