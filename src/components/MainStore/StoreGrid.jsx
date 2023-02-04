import React from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import { response } from "../Api/api"

export default function StoreGrid() {
    const { isLoading, isError, data, error } = useQuery("res", response)
    console.log(data)
    return (
        <ContainerDiv>
            <WrapDiv>
                {data && data.map((item) => <ItemDiv>{item.id}</ItemDiv>)}
            </WrapDiv>

            <ItemMoreBtn>More...</ItemMoreBtn>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 750px; */
    justify-content: center;
    align-items: center;
`

const WrapDiv = styled.div`
    height: 1100px;
    grid-gap: 20px;
    display: grid;
    grid-template-columns: 220px 220px 220px 220px 220px;
    margin-top: 50px;
    place-items: center;
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
    margin-top: 50px;
`
