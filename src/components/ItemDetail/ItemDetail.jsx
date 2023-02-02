import React from "react"
import styled from "styled-components"
import item1 from "../../image/item1.jpeg"

export default function ItemDetail() {
    return (
        <WrapDiv>
            <ItemImg src={item1} alt="" />
            <ItemTextDiv>
                <ItemTextH1>하이</ItemTextH1>
                <h5>이건 스노우보드가아니야</h5>
            </ItemTextDiv>
        </WrapDiv>
    )
}

const WrapDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ItemImg = styled.img`
    width: 400px;
    height: 400px;
`
const ItemTextDiv = styled.div``

const ItemTextH1 = styled.h1`
    font-size: 24px;
    font-weight: bold;
`
