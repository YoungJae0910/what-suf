import React from "react"
import styled from "styled-components"
import slider1 from "../../image/slider1.jpeg"

export default function MainTitle() {
    return (
        <Warpdiv>
            <InfoImg src={slider1} alt="" />
            <InfoText>
                우리는 서핑을 통해 추구할 수 있는 다양한 삶의 모습을 균형감 있게
                전달합니다.
                <br /> 파도를 타는것으로서의 서핑만이 아닌, 매일 같이 입고,
                마시고, 느끼는 <br />
                일상적인 삶 속에서의 서핑을 서프코드의 방식으로 표현합니다.
                <br />
                이러한 생각들은 우리의 취향으로 가득찬 공간들을 만들어
                <br /> 모두가 서핑을 항상 즐길 수 있도록 합니다.
            </InfoText>
        </Warpdiv>
    )
}

const Warpdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 100px;
    margin-bottom: 100px;
`

const InfoImg = styled.img`
    width: 600px;
    height: 400px;
    border-radius: 20px;
`

const InfoText = styled.p``
