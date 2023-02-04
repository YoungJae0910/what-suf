import React from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import { reservation } from "../Api/api"

export default function MainReservationGrid() {
    const { isLoading, isError, data, error } = useQuery(
        "reservation",
        reservation
    )
    console.log(data)

    return (
        <WrapDiv>
            {data &&
                data.map((item) => {
                    return (
                        <>
                            <ItemDiv>
                                <p>{item.id}</p>
                                <p>{item.price}</p>
                            </ItemDiv>
                        </>
                    )
                })}

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
