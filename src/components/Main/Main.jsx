import React from "react"
import styled from "styled-components"
import image from "../../image/main.gif"

export default function Main() {
    return (
        <Warpdiv>
            <Backgroundimage src={image} />
            <MainH1>WHAT`SUF</MainH1>
            <MainH3>Enjoy Surfing</MainH3>
            <MainAngleText>▿</MainAngleText>
        </Warpdiv>
    )
}

const Warpdiv = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Backgroundimage = styled.img`
    width: 100%;
    height: 100vh;
    position: absolute;
`

const MainH1 = styled.h1`
    position: absolute;
    color: white;
    font-size: 80px;
    margin-left: 40%;
    margin-top: 400px;
`
const MainH3 = styled.h1`
    position: absolute;
    color: white;
    font-size: 40px;
    margin-left: 45%;
    margin-top: 480px;
`
const MainAngleText = styled.p`
    position: absolute;
    color: white;
    font-size: 20px;
    margin-left: 50%;
    margin-top: 850px;
    animation: ani 1s infinite alternate;
    @keyframes ani {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, 20px);
        }
    }
`
