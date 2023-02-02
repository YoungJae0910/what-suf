import styled from "styled-components"

export const AuthForm = styled.form`
    background-color: rgba(31, 46, 126, 0.1);
    /* opacity: 0.1; */
    border-radius: 10px;

    padding-top: 1%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 70%;

    margin: auto;
`

export const AuthTitle = styled.h3`
    margin-bottom: 1%;

    color: black;
`

export const AuthInput = styled.input`
    width: 80%;
    margin-bottom: 1%;

    padding: 1%;
    color: black;
`

export const AuthButton = styled.button`
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
