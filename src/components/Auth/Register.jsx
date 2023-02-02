import { useState } from "react"
import {
    AuthButton,
    AuthForm,
    AuthInput,
    AuthTitle
} from "./sharedAuthComponents"

export default function Register() {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const onRegisterFormSubmit = async (e) => {
        e.preventDefault()
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
            <AuthButton type="submit">회원가입</AuthButton>
        </AuthForm>
    )
}
