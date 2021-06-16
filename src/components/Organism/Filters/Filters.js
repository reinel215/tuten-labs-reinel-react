import React, { useState, useEffect } from 'react';

import Paper from '../../Atoms/Paper/Paper';

import InputTextLabel from '../../Molecules/InputTextLabel/InputTextLabel';
import Title from '../../Atoms/Texts/Title/Title';
import GridContainer from '../../Atoms/Layout/GridContainer/GridContainer';
import GridItem from '../../Atoms/Layout/GridItem/GridItem';

const Filters = ({onFilterChange = () => {}}) => {

    const [idLessThan, setIdLessThan] = useState("");
    const [idMoreThan, setIdMoreThan] = useState("");

    const [priceLessThan, setPriceLessThan] = useState("");
    const [priceMoreThan, setPriceMoreThan] = useState("");



    useEffect(() => {

        onFilterChange({
            idLessThan,
            idMoreThan,
            priceLessThan,
            priceMoreThan
        })

    }, [idLessThan, idMoreThan, priceLessThan, priceMoreThan, onFilterChange])

    return (
        <Paper>

            <Title>ID</Title>

            <GridContainer>

                <GridItem col={6} style={{ padding: 4 }}>
                    <InputTextLabel
                        value={idMoreThan}
                        onChange={e => setIdMoreThan(e.target.value.replace(/[^\d]/, ""))}
                        label="mayor a"
                    />
                </GridItem>

                <GridItem col={6} style={{ padding: 4 }} >
                    <InputTextLabel
                        value={idLessThan}
                        onChange={e => setIdLessThan(e.target.value.replace(/[^\d]/, ""))}
                        label="menor a"
                    />
                </GridItem>

            </GridContainer>


            <Title>Precio</Title>

            <GridContainer>

                <GridItem col={6} style={{ padding: 4 }}>
                    <InputTextLabel
                        value={priceMoreThan}
                        onChange={e => setPriceMoreThan(e.target.value.replace(/[^\d]/, ""))}
                        label="mayor a"
                    />
                </GridItem>

                <GridItem col={6} style={{ padding: 4 }} >
                    <InputTextLabel
                        value={priceLessThan}
                        onChange={e => setPriceLessThan(e.target.value.replace(/[^\d]/, ""))}
                        label="menor a"
                    />
                </GridItem>

            </GridContainer>
        </Paper>
    )
}

export default Filters
