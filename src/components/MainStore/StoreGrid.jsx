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

            <ItemMoreBtn>More...</ItemMoreBtn>

        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;

    flex-direction: column;
    height: 750px;

    justify-content: center;
    align-items: center;
`

const WrapDiv = styled.div`
    height: 100%;
    grid-gap: 200px;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    grid-template-rows: 150px 150px 150px;
    margin-top: 150px;
`
const ItemDiv = styled.div`
    width: 220px;
    height: 310px;
    background-color: gray;
`

const ItemMoreBtn = styled.div`
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
`
