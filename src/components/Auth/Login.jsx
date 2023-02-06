import { useState } from "react"
import { useQuery } from "react-query"
import { getUserId } from "../Api/api"
import {
    AuthButton,
    AuthForm,
    AuthInput,
    AuthTitle
} from "./sharedAuthComponents"

export default function Login() {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const { isLoading, isError, data, error } = useQuery("res", getUserId)

    const onLoginFormSubmit = async (e) => {
        e.preventDefault()

        const test = data.filter(
            (user) => user.id === id && user.password === password
        )
        if (test.length === 0) {
            alert("다시시도하시라")
            return
        }
        console.log(test)
        window.localStorage.setItem("id", test[0]?.id)
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
