import React from "react"
import styled from "styled-components"

export default function MainReservationGrid() {
    return (
        <WrapDiv>
            <ItemDiv></ItemDiv>
            <ItemDiv></ItemDiv>
        </WrapDiv>
    )
}

const WrapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const ItemDiv = styled.div`
    width: 1200px;
    height: 170px;
    background-color: red;
    margin-bottom: 40px;
`
