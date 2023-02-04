import React from "react"
import styled from "styled-components"

export default function MainStore() {
    return (
        <WarpDiv>
            <h1>STORE</h1>
        </WarpDiv>
    )
}

const WarpDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: bold;
`
