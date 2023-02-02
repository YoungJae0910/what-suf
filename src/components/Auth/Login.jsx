import { useState } from "react"
import {
    AuthButton,
    AuthForm,
    AuthInput,
    AuthTitle
} from "./sharedAuthComponents"

export default function Login() {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onLoginFormSubmit = async (e) => {
        e.preventDefault()
        // Do someting
    }

    return (
        <AuthForm onSubmit={onLoginFormSubmit}>
            <AuthTitle>로그인</AuthTitle>
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
            <AuthButton type="submit">로그인</AuthButton>
        </AuthForm>
    )
}
