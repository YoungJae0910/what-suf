import React, { useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getUserId, upDateUser } from "../Api/api"

export default function UserUpDate() {
    const localId = localStorage.getItem("id")
    const { isLoading, isError, data, error } = useQuery("res", getUserId)
    const navigate = useNavigate()
    const dataId = data?.find((item) => item.id === localId)
    console.log(dataId)

    const [email, setEmale] = useState("")
    console.log(email)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    useEffect(() => {
        if (localId === null) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        setEmale(dataId?.email)
    }, [dataId?.email])

    useEffect(() => {
        setName(dataId?.name)
    }, [dataId?.name])

    useEffect(() => {
        setAddress(dataId?.address)
    }, [dataId?.address])

    const { mutate } = useMutation(upDateUser)

    const upDateUserHandler = (e) => {
        e.preventDefault()
        const upDate = {
            id: dataId?.id,
            password: dataId?.password,
            email,
            name,
            address
        }

        mutate(upDate)
    }

    return (
        <WrapDiv>
            <UserBoxDiv>
                <p>아이디 : {dataId?.id}</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmale(e.target.value)
                    }}
                />
                <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value)
                    }}
                />
                <UpdateBtn onClick={upDateUserHandler}>수정하기</UpdateBtn>
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
    display: flex;
    flex-direction: column;
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
