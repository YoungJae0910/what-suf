import React from "react"
import styled from "styled-components"

export default function StoreGrid() {
    return (
        <ContainerDiv>
            <WrapDiv>
                <ItemDiv></ItemDiv>
                <ItemDiv></ItemDiv>
                <ItemDiv></ItemDiv>
                <ItemDiv></ItemDiv>
                <ItemDiv></ItemDiv>
                <ItemDiv></ItemDiv>
                <ItemDiv></ItemDiv>
                <ItemDiv></ItemDiv>
            </WrapDiv>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const WrapDiv = styled.div`
    grid-gap: 250px;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    grid-template-rows: 150px 150px 150px;
    margin-top: 50px;
`
const ItemDiv = styled.div`
    width: 250px;
    height: 350px;
    background-color: red;
`
