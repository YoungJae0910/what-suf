import React from "react"
import styled from "styled-components"

export default function MainReservationGrid() {
    return (
        <WrapDiv>
            <ItemDiv></ItemDiv>
            <ItemDiv></ItemDiv>
            <ItemDiv></ItemDiv>
            <ItemDiv></ItemDiv>
            <ItemMoreBtn>More...</ItemMoreBtn>
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
    background-color: gray;
    margin-bottom: 40px;
`
const ItemMoreBtn = styled.div`
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
`
