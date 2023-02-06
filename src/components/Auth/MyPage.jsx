import React, { useEffect } from "react"
import { useQuery } from "react-query"
import { Navigate, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getUserId } from "../Api/api"

export default function MyPage() {
    const localId = localStorage.getItem("id")
    const { isLoading, isError, data, error } = useQuery("res", getUserId)
    const navigate = useNavigate()

    useEffect(() => {
        if (localId === null) {
            navigate("/")
        }
    }, [])

    const dataId = data?.find((item) => item.id === localId)
    console.log(dataId)

    return (
        <WrapDiv>
            <UserBoxDiv>
                <p>아이디 : {dataId?.id}</p>
                <p>이름 : {dataId?.name}</p>
                <p>이메일 : {dataId?.email}</p>
                <p>주소 : {dataId?.adress}</p>
                <UpdateBtn>수정하기</UpdateBtn>
            </UserBoxDiv>
        </WrapDiv>
    )
}

const WrapDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const UserBoxDiv = styled.div`
    margin-top: 100px;
    width: 40%;
    height: 700px;
    background-color: rgba(31, 46, 126, 0.1);
`
const UpdateBtn = styled.button`
    background-color: #1f2e7e;
    color: white;
    margin-bottom: 1%;

    border: 1px solid #1f2e7e;
    border-radius: 10px;

    transition: linear 0.2s;

    padding: 1%;

    :hover {
        background-color: transparent;
        color: #1f2e7e;
    }
`
