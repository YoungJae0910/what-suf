import { useState } from "react"
import { useMutation } from "react-query"
import {
    AuthButton,
    AuthForm,
    AuthInput,
    AuthTitle
} from "./sharedAuthComponents"
import { addUserList } from "../Api/api"

export default function Register() {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const { mutate } = useMutation(addUserList)
    const onRegisterFormSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            id,
            password,
            name,
            email,
            address
        }
        mutate(newUser)
        // Do something
    }

    return (
        <AuthForm onSubmit={onRegisterFormSubmit}>
            <AuthTitle>회원가입</AuthTitle>
            <AuthInput
                value={id}
                onChange={(e) => {
                    setId(e.target.value)
                }}
                placeholder="ID"
            />
            <AuthInput
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                placeholder="PASSWORD"
            />
            <AuthInput
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                placeholder="NAME"
            />
            <AuthInput
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                placeholder="EMAIL"
            />
            <AuthInput
                value={address}
                onChange={(e) => {
                    setAddress(e.target.value)
                }}
                placeholder="ADRESS"
            />
            <AuthButton type="submit">회원가입</AuthButton>
        </AuthForm>
    )
}
