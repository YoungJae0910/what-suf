import React from "react"
import styled from "styled-components"
import item1 from "../../image/item1.jpeg"
import itemdetail from "../../image/itemdetail.jpeg"
import itemdetail1 from "../../image/itemdetail.jpeg"
import itemdetail2 from "../../image/itemdetail2.jpeg"
import itemdetail3 from "../../image/itemdetail3.jpeg"
import DetailHeader from "../Header/DetailHeader"
import MainStore from "../MainStore/MainStore"

export default function ItemDetail() {
    return (
        <>
            <DetailHeader />
            <ContainerDiv>
                <ItemDiv>
                    <ItemImg src={item1} alt="" />
                    <ItemTextDiv>
                        <ItemMaker>한국에서만들었게요</ItemMaker>
                        <ItemTextH1>하이</ItemTextH1>
                        <ItemTextH5>이건 스노우보드가아니야</ItemTextH5>
                        <ItemPrice>Price : 2,000,000</ItemPrice>
                        <ItemSubText>물위에서타는 스노우보드</ItemSubText>
                        <ButtonDiv>
                            <DtailBtn>Buy</DtailBtn>
                            <DtailBtn>Add To Cart</DtailBtn>
                        </ButtonDiv>
                    </ItemTextDiv>
                </ItemDiv>
                <DetailDiv>
                    <ItemDetailImgTop src={itemdetail1} alt="" />
                    <ItemDetailImg src={itemdetail2} alt="" />
                    <ItemDetailImg src={itemdetail3} alt="" />
                    <ItemDetailImgBottom src={itemdetail} alt="" />
                </DetailDiv>
                <RullDiv>
                    <RullH1>교환 및 환불 규정</RullH1>
                    <RullText>
                        제품에 착용흔적이 없는 상태에서 교환 및 환불이
                        가능합니다.
                        <br />
                        상품 또는 상품 포장지가 훼손되었거나 택이 없을 경우 교환
                        및 환불이 불가합니다.
                        <br /> 양말, 속옷류, 악세서리류는 교환 및 환불이
                        불가합니다.
                        <br /> 세탁한 상품은 교환 및 환불이 불가합니다.
                        <br /> 단순 변심 및 사이즈 오류로 인한 반송시에는
                        고객님께서 운송비를 부담해 주셔야 합니다.
                        <br /> 반품 수령 후 검수 기간으로 인해 교환 및 환불
                        처리까지 1~3일 정도 소요될 수 있는 점 많은 양해
                        부탁드립니다.
                        <br /> 교환 및 환불 방법에 대한 자세한 내용은
                        고객센터에서 확인하실 수 있습니다.
                    </RullText>
                </RullDiv>
            </ContainerDiv>
        </>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const ItemDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 150px;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`
const ItemImg = styled.img`
    width: 300px;
    height: 300px;
`
const ItemTextDiv = styled.div``

const ItemMaker = styled.p`
    font-size: 12px;
    color: gray;
`

const ItemTextH1 = styled.h1`
    font-size: 24px;
    font-weight: bold;
`
const ItemTextH5 = styled.h5`
    font-weight: bold;
`

const ItemPrice = styled.p`
    font-size: 22px;
    color: #21176a;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`
const ItemSubText = styled.p`
    font-size: 14px;
`

const ButtonDiv = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`

const DetailDiv = styled.div`
    margin-top: 40px;
    width: 70%;
    border-top: 1px solid #b4b4b4;
    border-bottom: 1px solid #b4b4b4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DtailBtn = styled.button`
    width: 80px;
    height: 30px;
    margin-right: 20px;
    background-color: #21176a;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
`

const ItemDetailImgTop = styled.img`
    margin-top: 20px;
    width: 70%;
`
const ItemDetailImg = styled.img`
    width: 70%;
`
const ItemDetailImgBottom = styled.img`
    width: 70%;
    margin-bottom: 20px;
`
const RullDiv = styled.div`
    width: 70%;
    border-bottom: 1px solid #b4b4b4;
    margin-bottom: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const RullH1 = styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
`

const RullText = styled.p`
    font-size: 12px;
    color: gray;
`
